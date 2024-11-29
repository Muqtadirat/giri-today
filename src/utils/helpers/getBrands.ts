import {
  bestBuyDark,
  ebay,
  etsy,
  nike,
  simon,
  tapestry,
} from '@/assets/assets';

export type BrandName = 'nike' | 'ebay' | 'tapestry' | 'bestBuy' | 'etsy' | 'simon';

export const brandLogos: Record<BrandName, string> = {
  nike: nike,
  ebay: ebay,
  etsy: etsy,
  simon: simon,
  tapestry: tapestry,
  bestBuy: bestBuyDark,
};

export const getBrandLogo = (brand: BrandName) => brandLogos[brand] || null;
