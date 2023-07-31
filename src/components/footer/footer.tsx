import * as React from 'react';
import Link from 'next/link'


const Footer = () => {
  return (
    <div className="w-full bg-container-gray m-4">
      <p className="font-bold">RECHTSSTOFFE</p>
      <br />
      <ul className="font-Montserrat text-xs md:text-lg">
          <li>
            <Link href="/datenschutz">
              Datenschutz
            </Link>
          </li>
          <li>
            <Link href="/nutzungsbedingungen">
              Nutzungsbedingungen
            </Link>
          </li>
        </ul>
    </div>
  );
};

export default Footer;
