import { SecondaryButton } from '@/app/components';
import { bestBuy } from '@/assets/assets';
import Image from 'next/image';
import brands from './constants/brands';

const Hero = () => {
  return (
    <>
      <header className="bg-black py-10 lg:py-[124px] px-6 lg:px-16 rounded-lg">
        <div className="space-y-6 text-white">
          <Image src={bestBuy} alt="Best Buy logo" />
          <div>
            <p className="font-semibold">Early launch sales</p>
            <p className="mt-2 font-libre-caslon italic text-5xl lg:text-8xl">
              New <br /> Collection
            </p>
          </div>
          <SecondaryButton type="button" ariaLabel="Shop now">
            Shop now
          </SecondaryButton>
        </div>
      </header>
      <div className="mt-6 lg:mt-8">
        <p className="text-shadow text-lg lg:text-2xl font-semibold text-text-default">
          Popular Brands
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-6 items-center justify-items-center">
          {brands.map(({ alt, logo }) => (
            <div
              key={alt}
              className="w-32 h-32 flex justify-center items-center hover:cursor-pointer"
            >
              <Image src={logo} alt={alt} className="max-w-full max-h-full" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
