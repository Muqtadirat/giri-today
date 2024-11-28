import type { Metadata } from 'next';
import './globals.css';
import { libre_caslon, raleway, roboto } from '@/assets/fonts';
import { Providers } from '@/context/provider';
import { Layout } from './components';

export const metadata: Metadata = {
  title: 'Giri Today - Quality Products for Every Occasion',
  description:
    'Shop a wide range of high-quality products at Giri Today. Find everything you need, from gadgets to fashion, with fast shipping and great deals.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </head> */}
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
