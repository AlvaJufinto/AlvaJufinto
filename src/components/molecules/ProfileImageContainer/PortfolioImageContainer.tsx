import React, { FC } from 'react';
import ImageContainer from '../../atoms/ImageContainer/ImageContainer';

import LogoAJ from "./../../../assets/img/aj-img.png";

import "./style.scss";

interface IState {
  emoticon: string,
}

const PortfolioImageContainer: FC<IState> = ({ emoticon }) => {
  return (
    <div className="PortfolioImageContainer">
        <ImageContainer image={LogoAJ} imageHeight="110px" imageWidth="110px" />
        <div className="PortfolioImageContainer-Emoticon">
            {emoticon}
        </div>
    </div>
  );
}

export default PortfolioImageContainer;
