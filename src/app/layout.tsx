import type { Metadata } from 'next';
import './globals.css';
import { libre_caslon, raleway, roboto } from '@/assets/fonts';
import { Providers } from '@/context/provider';
import { Layout } from './components';

export const metadata: Metadata = {
  title: 'WeShop - Quality Products for Every Occasion',
  description:
    'Shop a wide range of high-quality products at WeShop. Find everything you need, from gadgets to fashion, with fast shipping and great deals.',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className} ${raleway.variable} ${libre_caslon.variable}`}
      >
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
