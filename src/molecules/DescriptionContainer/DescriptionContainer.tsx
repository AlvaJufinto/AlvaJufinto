import React, { FC } from 'react';
// import Text from '../Text/Text';

import './style.scss';

interface IState {
  linkRef: string,
  linkText: string,
}

const DescriptionLink: FC<IState> = ({ linkRef, linkText }) => {
  return (
    <div className="DescriptionLink">

    </div>
  );
}

export default DescriptionLink;
