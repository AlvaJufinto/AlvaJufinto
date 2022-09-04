import React, { FC } from 'react';

// molecules
import DescriptionContainer from '../../molecules/DescriptionContainer/DescriptionContainer';
import PortfolioContainer, { IState as IProps } from '../../molecules/PortfolioContainer/PortfolioContainer';

// images
import LibraerityImg from "./../../assets/img/libraerity-img.png";
import DiscordImg from "./../../assets/img/discord-img.png";
import SIJAImg from "./../../assets/img/sija-img.png";

import "./style.scss" 

const ProjectsContainer: FC = () => {
  const PortfolioList: IProps[] = [
    {
      year: "2021",
      title: "Libraerity",
      description: `Educational theme  website that my team and I created for "Dynamic-16" frontend development competition with NextJS`,
      link: "https://github.com/AlvaJufinto/libraerity",
      image: LibraerityImg,
    },
    {
      year: "2022",
      title: "SIJA-26",
      description: `A personal website project built with ReactJS containing information about SIJA majors at SMKN 26 Jakarta
     `,
      link: "https://github.com/AlvaJufinto/sija-26",
      image: SIJAImg,
    },
    {
      year: "2022",
      title: "Genshin Discord Bot",
      description: `A bot for a communication app called "Discord" that provides
      information about the videogame titled "Genshin Impact"`,
      link: "https://github.com/AlvaJufinto/GenshinDiscordBot",
      image: DiscordImg,
    },
  ]
  
  return (
    <div className="ProjectContainer">
      <DescriptionContainer title="Selected Projects">
        {   
          PortfolioList.map(portfolio => (
            <div className="ProjectContainer-Portfolio">
                <PortfolioContainer year={portfolio.year} title={portfolio.title} description={portfolio.description} link={portfolio.link} image={portfolio.image} /> 
            </div>
          ))
        }
      </DescriptionContainer>
    </div>
  );
}

export default ProjectsContainer;
