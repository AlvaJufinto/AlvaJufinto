import React, { FC, ReactNode } from 'react';
import Text, { TextType } from './../../atoms/Text/Text';
import LinkContainer from '../../atoms/LinkContainer/LinkContainer';

import './style.scss';

interface IState {
  year: string,
  title: string,
  description: string,
  link: string,
  image: File,
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
    </div>
  );
}

export default PortfolioContainer;
