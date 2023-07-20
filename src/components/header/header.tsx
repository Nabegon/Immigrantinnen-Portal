import * as React from 'react';
import Link from 'next/link'


const Header = () => {
  return (
    <div className="container">
      {/* <div className="mt-5"> */}
        <ul className="flex space-x-10 font-Montserrat justify-end m-5">
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
      {/* </div> */}
    </div>
  );
};

export default Header;
