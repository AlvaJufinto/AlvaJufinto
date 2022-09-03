import React, { FC } from 'react';
import './style.scss';

interface IState {
  text: string,
  textType: string,
}

export enum TextType {
  Headline="headline",
  Title="title",
  Ordinary="ordinary",
  Small="small"
}

const Text: FC<IState> = ({ text, textType }) => {
  return (
    <p className={`Text-${textType}`}>
      {text}
    </p>
  );
}

export default Text;
