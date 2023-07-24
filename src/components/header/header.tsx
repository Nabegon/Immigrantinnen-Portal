import * as React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-center m-5 font-Montserrat text-xs md:text-lg">
        <Link href="/">
          <div className="m-5 md:m-0">Logo</div>
        </Link>

        <ul className="flex space-x-4 md:space-x-10 font-Montserrat text-xs md:text-lg">
          <li>
            <Link href="/frauenrechte">
              Frauenrechte
            </Link>
          </li>
          <li>
            <Link href="/beratung">
              Beratung
            </Link>
          </li>
          <li>
            <Link href="/job-hilfe">
              Job-Hilfe
            </Link>
          </li>
          <li>
            <Link href="/deutsch-lernen">
              Deutsch lernen
            </Link>
          </li>
          <li>
            <Link href="/blog">
              Blog und News
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
