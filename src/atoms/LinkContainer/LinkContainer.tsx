import React, { FC } from 'react';
import Text, { TextType } from '../Text/Text';

import ArrowIcon from "./../../assets/icon/arrow-link-icon.png";
import './style.scss';

interface IState {
  linkRef: string,
  linkText: string,
}

const LinkContainer: FC<IState> = ({ linkRef, linkText }) => {
  return (
    <a href={linkRef} target="_blank" rel="noreferrer"  className="LinkContainer">
        <Text text={linkText} textType={TextType.Ordinary} />
        <img className='LinkContainer-Img' src={ArrowIcon} alt="" />
    </a>
  );
}

export default LinkContainer;
