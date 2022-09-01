import React, { FC } from 'react';
import ImageContainer from '../../atoms/ImageContainer/ImageContainer';
// images : js, ts, node, react, next

import LogoJS from "./../../assets/logo/js-logo.png";
import LogoTS from "./../../assets/logo/ts-logo.png"; 
import LogoNode from "./../../assets/logo/node-logo.png"; 
import LogoReact from "./../../assets/logo/react-logo.png"; 
import LogoNext from "./../../assets/logo/next-logo.png"; 

import './style.scss';

const TechStackImage: FC = () => {
  return (
    <div className="TechStackImage">
        <ImageContainer image={LogoJS} />
        <ImageContainer image={LogoTS} />
        <ImageContainer image={LogoNode} />
        <ImageContainer image={LogoReact} />
        <ImageContainer image={LogoNext} />
    </div>
  );
}

export default TechStackImage;
