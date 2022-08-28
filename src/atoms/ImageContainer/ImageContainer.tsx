import { FC } from 'react';

interface IState {
  image: string,
  imageWidth?: number,
  imageHeight?: number,
  imageCircle?: boolean,
}

const Image: FC<IState> = ({ image, imageWidth, imageHeight, imageCircle }) => {
  return (
    <img className="Image" src={image} alt="JustImage" style={{
      width: imageWidth,
      height: imageHeight,
      borderRadius: imageCircle ? '50%' : '0%',
    }} />
  );
}

export default Image;
