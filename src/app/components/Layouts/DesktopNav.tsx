'use client';

import { logoFull } from '@/assets/assets';
import Image from 'next/image';
import { AutoComplete } from '../Inputs';
import { PillButton, PrimaryButton } from '../Buttons';
import pills from './pills';
import { useState } from 'react';

interface DesktopNavProps {
  pathname: string;
}

const DesktopNav: React.FC<DesktopNavProps> = ({}) => {
  const [selectedPill, setSelectedPill] = useState<string | null>(null);

  const handlePillClick = (title: string) => {
    setSelectedPill((prev) => (prev === title ? null : title));
  };

  return (
    <nav className="fixed top-0 z-50 left-1/2 transform -translate-x-1/2 w-full max-w-[1232px] px-3 py-4 bg-background-default">
      <div className="flex justify-between items-center">
        <Image src={logoFull} alt="WeShop logo" />
        <div className="flex items-center gap-5">
          <div className="hidden lg:block">
            <AutoComplete
              value=""
              onChange={() => {}}
              options={[
                { label: 'Clothing and Apparel', value: 'Clothing and Apparel' },
                { label: 'Home and Kitchen', value: 'Home and Kitchen' },
                { label: 'Electronics', value: 'Electronics' },
              ]}
            />
          </div>
          <PrimaryButton type="button" ariaLabel="Sign in">
            Sign in
          </PrimaryButton>
        </div>
      </div>
      <hr className="my-4" />
      {/* Pills Section */}
      <div className="lg:flex lg:flex-wrap space-x-3 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {pills.map(({ alt, title }) => (
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

export default DesktopNav;
