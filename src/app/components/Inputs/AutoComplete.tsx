'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { useClickOutside } from '@/hooks/useClickOutside';

import { DropDownIcon } from '@/assets/assets';
import { handleEnterKeyDown, truncateText } from '@/utils';

import { AutoCompleteProps } from './types';

const AutoComplete: React.FC<AutoCompleteProps> = ({
  name,
  Icon,
  label,
  value,
  options,
  onChange,
  disabled,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [selectedLabel, setSelectedLabel] = useState<string>('');
  const [displayOptions, setDisplayOptions] = useState<
    { value: string; label: string; flag?: string }[]
  >([]);
  const [filteredOptions, setFilteredOptions] = useState<
    { value: string; label: string; flag?: string }[]
  >([]);
  const [isDropdownFlipped, setIsDropdownFlipped] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInputValue(value);
    const selectedOption = options.find((option) => option.value === value);
    setSelectedLabel(selectedOption ? selectedOption.label : '');
  }, [value, options]);

  useEffect(() => {
    const optionsToShow = inputValue
      ? options.filter((option) =>
          option.label.toLowerCase().includes(inputValue.toLowerCase()),
        )
      : options;
    setFilteredOptions(optionsToShow);
    setDisplayOptions(optionsToShow);
  }, [inputValue, options]);

  useClickOutside(isOpen, () => setIsOpen(false), [], ref);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsOpen(true);
      onChange(event.target.value);
      setInputValue(event.target.value);
      setDisplayOptions(filteredOptions);
    },
    [filteredOptions, onChange],
  );

  const handleSelect = (label: string) => {
    const selectedOption = options.find((option) => option?.label === label);

    if (selectedOption) {
      setIsOpen(false);
      onChange(selectedOption.value);
      setInputValue(selectedOption?.label || '');
      setSelectedLabel(selectedOption?.label || '');
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setDisplayOptions(options);
  };

  useEffect(() => {
    if (isOpen && ref.current && dropdownRef.current) {
      const inputRect = ref.current.getBoundingClientRect();
      const dropdownHeight = dropdownRef.current.scrollHeight;
      const availableSpaceBelow = window.innerHeight - inputRect.bottom;
      const availableSpaceAbove = inputRect.top;

      // Flip dropdown if there's more space above than below
      setIsDropdownFlipped(
        availableSpaceBelow < dropdownHeight &&
          availableSpaceAbove > availableSpaceBelow,
      );
    }
  }, [isOpen, inputValue, dropdownRef.current?.scrollHeight]);

  return (
    <div className="relative" ref={ref}>
      {label && <p className="block mb-1 text-xs text-text-subdued">{label}</p>}
      <div
        tabIndex={0}
        role="combobox"
        aria-expanded={isOpen}
        aria-controls="autocomplete-options"
        aria-activedescendant={selectedLabel}
        onMouseLeave={() => setIsHovered(false)}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        className={`flex items-center ${isHovered || value?.length > 0 ? 'text-text-default' : 'text-text-subdued'} h-[50px] text-text-subdued pl-5 pr-2 border border-border-default ${disabled ? 'bg-surface-disabled' : 'bg-surface-subdued'} rounded-lg transition-all ease-in-out duration-300`}
      >
        {Icon && (
          <div>
            <Icon
              stroke={
                isHovered || value?.length > 0 ? 'currentColor' : '#B1B3B3'
              }
              style={{ transition: 'stroke 0.3s ease' }}
            />
          </div>
        )}
        <input
          type="text"
          autoComplete="off"
          value={`Shop category: ${inputValue}`}
          disabled={disabled}
          onFocus={toggleDropdown}
          placeholder={placeholder}
          onChange={handleInputChange}
          className="lg:min-w-[184px] w-full py-3 text-xs transition-all duration-300 ease-in-out bg-transparent outline-none text-text-default disabled:cursor-not-allowed"
        />
        {!disabled && (
          <button
            type="button"
            aria-expanded={isOpen}
            name={`${name}-trigger`}
            onClick={toggleDropdown}
            aria-label="Toggle dropdown"
            className="p-0.5 hover:bg-gray-200 rounded-full transition-all ease-in-out duration-300"
          >
            <DropDownIcon
              stroke={isHovered ? 'currentColor' : '#B1B3B3'}
              className="w-6 h-6"
            />
          </button>
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={dropdownRef}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0, y: '-10%' }}
              transition={{ duration: 0.3 }}
              className={`absolute text-text-default inset-x-0 px-2 ${isDropdownFlipped ? 'bottom-full mb-1' : 'top-full mt-1'} bg-white shadow-lg max-h-64 overflow-auto z-10 border border-border-default`}
            >
              {displayOptions.length > 0 ? (
                <ul
                  tabIndex={0}
                  role="listbox"
                  className="py-1"
                  aria-expanded={isOpen}
                  aria-labelledby="name"
                  aria-activedescendant={selectedLabel}
                >
                  {displayOptions.map((option, index) => (
                    <li
                      key={index}
                      role="option"
                      onClick={() => handleSelect(option.label)}
                      aria-selected={inputValue === option.label}
                      onKeyDown={(e) =>
                        handleEnterKeyDown(e, () => handleSelect(option.label))
                      }
                      className={`px-4 py-2 text-xs cursor-pointer hover:bg-surface-hovered flex items-center gap-4 truncate ${option.label === selectedLabel ? 'bg-gray-200' : ''}`}
                    >
                      {truncateText(option.label)}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-4 py-3 text-xs text-gray-500">
                  No options available
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AutoComplete;
