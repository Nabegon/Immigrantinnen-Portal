import * as React from 'react';
import Link from 'next/link'


const Header = () => {
  return (
    <div className="container bg-slate-950">
      {/* <div className="mt-5"> */}
        <ul className="flex space-x-10  font-Montserrat justify-end m-5">
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
            <Link href="/jobhilfe">
              Job-Hilfe
            </Link>
          </li>
          <li>
            <Link href="/deutschlernen">
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
