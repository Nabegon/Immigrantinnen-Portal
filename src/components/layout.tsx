import { ReactNode } from 'react';
import Header from './header/header';
import Footer from './footer/footer';

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
    </div>
  );
};

export default Layout;