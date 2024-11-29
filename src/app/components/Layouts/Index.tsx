'use client';

import { usePathname } from 'next/navigation';

import Footer from './Footer';
import NavBar from './NavBar';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <NavBar pathname={pathname} />
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
