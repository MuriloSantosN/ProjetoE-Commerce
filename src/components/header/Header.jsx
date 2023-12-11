import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import PrimarySearchAppBar from './PrimarySearchAppBar';


const Header = () => {
  return (
    <header>
      <ResponsiveAppBar />
      <PrimarySearchAppBar />
    </header>
  );
};

export default Header;