import React, { FC } from 'react';

import LinkContainer from '../../atoms/LinkContainer/LinkContainer';
import TechStackImage from '../../molecules/TechStackImagesContainer/TechStackImage';
import PortfolioImageContainer from '../../molecules/ProfileImageContainer/PortfolioImageContainer';
import DescriptionContainer from '../../molecules/DescriptionContainer/DescriptionContainer';
import Text, { TextType } from '../../atoms/Text/Text';
import PortfolioContainer from '../../molecules/PortfolioContainer/PortfolioContainer';

import LibraerityLogo from "./../.././assets/img/libraerity-img.png"

import './style.scss';

const Home: FC = () => {
  return (
    <div className="App">
      <LinkContainer linkRef='#' linkText='bruh' />
      <TechStackImage />
      <PortfolioImageContainer emoticon='🎉' />
      <DescriptionContainer title="awkoawkoakwo">
        <Text text="adsads" textType={TextType.Ordinary} />
      </DescriptionContainer>
      <PortfolioContainer year="2021" title='Libraerity' description='Educational theme  website that my team and I created for "Dynamic-16" frontend development competition with NextJS' link="#" image={LibraerityLogo} />
    </div>
  );
}

export default Home;
