import React from 'react';
import { FC } from 'react';
import LinkContainer from '../../atoms/LinkContainer/LinkContainer';

import './style.scss';

const Home: FC = () => {
  return (
    <div className="App">
      <LinkContainer linkRef='#' linkText='bruh' />
    </div>
  );
}

export default Home;
