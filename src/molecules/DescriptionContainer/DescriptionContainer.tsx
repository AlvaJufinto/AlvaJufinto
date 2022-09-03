import React, { FC, ReactNode } from 'react';
import Text, { TextType } from './../../atoms/Text/Text';

import './style.scss';

interface IState {
  title: string,
  children: ReactNode,
}

const DescriptionContainer: FC<IState> = ({ title, children }) => {
  return (
    <div className="DescriptionContainer">
        <Text text={title} textType={TextType.Headline} />
        <div className="DescriptionContainer-description">
          {children}
        </div>
    </div>
  );
}

export default DescriptionContainer;
