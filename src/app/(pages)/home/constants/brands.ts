import { StaticImageData } from 'next/image';

import {
  bestBuyDark,
  ebay,
  etsy,
  nike,
  simon,
  tapestry,
} from '@/assets/assets';

interface BrandsProps {
  alt: string;
  logo: StaticImageData;
}

const brands: BrandsProps[] = [
  {
    alt: 'Nike logo',
    logo: nike,
  },
  {
    alt: 'eBay logo',
    logo: ebay,
  },
  {
    alt: 'Simon logo',
    logo: simon,
  },
  {
    alt: 'Etsy logo',
    logo: etsy,
  },
  {
    alt: 'Tapestry logo',
    logo: tapestry,
  },
  {
    alt: 'Best Buy logo',
    logo: bestBuyDark,
  },
];

export default brands;
