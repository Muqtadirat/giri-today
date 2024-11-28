'use client';

import { usePathname } from 'next/navigation';
import DesktopNav from './DesktopNav';

import Footer from './Footer';
import MobileNav from './MobileNav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <DesktopNav pathname={pathname} />
      <MobileNav pathname={pathname} />
      <div className="bg-background-default border-t border-border-subdued mt-32 lg:mt-40">
        <main className="max-w-[1232px] mx-auto pt-4 px-4 lg:px-0 pb-10">
          {children}
        </main>
      </div>{' '}
      <Footer />
    </>
  );
};

export default Layout;
