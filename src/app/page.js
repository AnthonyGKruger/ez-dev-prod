import React from 'react';
import Hero from '@/components/home/Hero';
import Skills from './skills/page';
import Portfolio from './portfolio/page';

// Home component representing the home page of the portfolio website
const Home = () => {
  return (
    <main className="">
      {/* Display the Hero component */}
      <Hero />

      {/* Display the Skills component */}
      <Skills />

      {/* Display the Portfolio component */}
      <Portfolio />
    </main>
  );
};

// Metadata for the home page
export const metadata = {
  title: "Home - Anthony Gordon Kruger's Portfolio",
  description: "EZdev portfolio",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
  icons: [
    { rel: 'icon', url: '/code.png' },
    { rel: 'apple', url: '/code.png' },
  ],
};

// Export the Home component as the default export
export default Home;