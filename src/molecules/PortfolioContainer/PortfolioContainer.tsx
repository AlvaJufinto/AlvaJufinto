import React, { FC } from 'react';
import Text, { TextType } from './../../atoms/Text/Text';
import LinkContainer from '../../atoms/LinkContainer/LinkContainer';
import ImageContainer from '../../atoms/ImageContainer/ImageContainer';

import './style.scss';

export interface IState {
  year: string,
  title: string,
  description: string,
  link: string,
  image: string,
}

const PortfolioContainer: FC<IState> = ({ year, title, description, link, image }) => {
  return (
    <div className="PortfolioContainer">
        <div className="PortFolioContainer-LeftSide"> 
          <Text text={year} textType={TextType.Small} />
          <Text text={title} textType={TextType.Title} />
          <Text text={description} textType={TextType.Ordinary} />
          <LinkContainer linkText='Source Code' linkRef='#' />
        </div>
        <ImageContainer image={image} imageWidth="110px" />
    </div>
  );
}

export default PortfolioContainer;
