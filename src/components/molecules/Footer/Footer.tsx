import React, { FC } from 'react';
import Text, { TextType } from '../../atoms/Text/Text';
import LinkContainer from "../../atoms/LinkContainer/LinkContainer"

import "./style.scss";

const Footer: FC = () => {
  return (
    <div className="Footer">
      <Text text="Contact" textType={TextType.Headline} />
      <div className="Footer-LinkContainer">
        <LinkContainer linkText='Github' linkRef="https://github.com/AlvaJufinto" />
        <LinkContainer linkText='LinkedIn' linkRef="https://www.linkedin.com/in/alva-jufinto/" />
        <LinkContainer linkText='Instagram' linkRef="https://www.instagram.com/alva.jufinto/" />
      </div>
    </div>
  );
}

export default Footer;
 