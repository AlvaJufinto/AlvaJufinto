import React, { FC } from 'react';

import ProfileContainer from '../../organisms/ProfileContainer/ProfileContainer';
import StackContainer from '../../organisms/StackContainer/StackContainer';
import ProjectsContainer from '../../organisms/ProjectsContainer/ProjectsContainer';

import LinkContainer from '../../atoms/LinkContainer/LinkContainer';
import TechStackImage from '../../molecules/TechStackImagesContainer/TechStackImage';
import Text, { TextType } from '../../atoms/Text/Text';
import PortfolioContainer from '../../molecules/PortfolioContainer/PortfolioContainer';
import Footer from '../../molecules/Footer/Footer';

import LibraerityLogo from "./../.././assets/img/libraerity-img.png"

import './style.scss';

const Home: FC = () => {
  return (
    <div className="App">
      <ProfileContainer />
      <StackContainer />
      <ProjectsContainer />
      {/* <LinkContainer linkRef='#' linkText='bruh' />
      <TechStackImage />
      <PortfolioContainer year="2021" title='Libraerity' description='Educational theme  website that my team and I created for "Dynamic-16" frontend development competition with NextJS' link="#" image={LibraerityLogo} /> */}
      <Footer />
    </div>
  );
}

export default Home;
