import React, { FC } from 'react';

import LinkContainer from '../../atoms/LinkContainer/LinkContainer';
import TechStackImage from '../../molecules/TechStackImagesContainer/TechStackImage';
import PortfolioImageContainer from '../../molecules/ProfileImageContainer/PortfolioImageContainer';

import './style.scss';

const Home: FC = () => {
  return (
    <div className="App">
      <LinkContainer linkRef='#' linkText='bruh' />
      <TechStackImage />
      <PortfolioImageContainer emoticon='🎉' />
    </div>
  );
}

export default Home;
