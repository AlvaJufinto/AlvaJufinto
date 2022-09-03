import React, { FC } from 'react';

import "./style.scss";

interface IState {
  image: string,
  imageWidth?: string,
  imageHeight?: string,
  imageCircle?: boolean,
}

const ImageContainer: FC<IState> = ({ image, imageWidth, imageHeight, imageCircle }) => {
  return (
    <img className="ImageContainer" src={image} alt="JustImage" style={{
      width: imageWidth,
      height: imageHeight,
      borderRadius: imageCircle ? '50%' : '0%',
    }} />
  );
}

export default ImageContainer;
 