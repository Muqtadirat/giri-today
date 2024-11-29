'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { CartIcon, logoFull } from '@/assets/assets';
import { dispatch, useProductSlice } from '@/redux';

import { PillButton, PrimaryButton } from '../Buttons';
import { AutoComplete } from '../Inputs';

import { clothingAndApparel, electronics, homeAndKitchen } from './pills';

interface NavBarProps {
  pathname: string;
}

const NavBar: React.FC<NavBarProps> = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedPill, setSelectedPill] = useState<string | null>(null);

  const { setSelectedCategory, selectedCategory, setSelectedSubCategory } =
    useProductSlice();

  const getPillsByCategory = () => {
    switch (selectedCategory) {
      case 'Clothing and Apparel':
        return clothingAndApparel;
      case 'Electronics':
        return electronics;
      case 'Home and Kitchen':
        return homeAndKitchen;
      default:
        return clothingAndApparel;
    }
  };

  const handlePillClick = (title: string) => {
    const newPill = selectedPill === title ? null : title;
    setSelectedPill(newPill);
    dispatch(setSelectedSubCategory(newPill));
  };

  return (
    <nav className="fixed top-0 z-50 left-1/2 transform -translate-x-1/2 w-full max-w-[1232px] px-3 py-4 bg-background-default">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image src={logoFull} alt="WeShop logo" />
        </Link>
        <div className="flex items-center gap-5">
          <div className="hidden lg:block">
            <AutoComplete
              value={selectedCategory || ''}
              onChange={(value) => {
                setSelectedPill(null);
                dispatch(setSelectedSubCategory(null));
                dispatch(setSelectedCategory(value));
              }}
              options={[
                {
                  label: 'Clothing and Apparel',
                  value: 'Clothing and Apparel',
                },
                { label: 'Home and Kitchen', value: 'Home and Kitchen' },
                { label: 'Electronics', value: 'Electronics' },
              ]}
            />
          </div>
          <Link
            href="/cart"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CartIcon
              fill={isHovered ? '#4D4D4D' : '#000'}
              className="transition-all duration-300"
            />
          </Link>
          <PrimaryButton type="button" ariaLabel="Sign in">
            Sign in
          </PrimaryButton>
        </div>
      </div>
      <hr className="my-4" />
      {/* Pills Section */}
      <div className="lg:flex lg:flex-wrap space-x-3 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {getPillsByCategory().map(({ alt, title }) => (
          <PillButton
            key={title}
            ariaLabel={alt}
            selected={selectedPill === title}
            onClick={() => handlePillClick(title)}
          >
            {title}
          </PillButton>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
