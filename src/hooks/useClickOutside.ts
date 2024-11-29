import { useEffect } from 'react';

export const useClickOutside = (
  isOpen: boolean,
  onClickOutside: () => void,
  additionalSelectors: string[] = [],
  ref: React.RefObject<HTMLElement> | null,
) => {
  useEffect(() => {
    if (!isOpen || !ref?.current) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        ref.current &&
        !ref.current.contains(target) &&
        !additionalSelectors.some((selector) =>
          Array.from(document.querySelectorAll(selector)).some((element) =>
            element.contains(target),
          ),
        )
      ) {
        onClickOutside();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, onClickOutside, isOpen, additionalSelectors]);
};
