import * as React from 'react';
import Link from 'next/link'


const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the Home Page</h1>
      <ul>
        <li>
          <Link href="/blog">
            Blog und News
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
