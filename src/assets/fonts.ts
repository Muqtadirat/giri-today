import { Raleway, Roboto, Libre_Caslon_Text } from 'next/font/google';

export const raleway = Raleway({
  weight: '800',
  subsets: ['latin'],
  variable: '--raleway',
});

export const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--roboto',
});

export const libre_caslon = Libre_Caslon_Text({
  weight: '400',
  subsets: ["latin"],
  variable: '--libre-caslon',
});
