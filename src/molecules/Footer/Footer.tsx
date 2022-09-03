import React, { FC } from 'react';
import Text, { TextType } from '../../atoms/Text/Text';
import LinkContainer from "../../atoms/LinkContainer/LinkContainer"

import "./style.scss";

const Footer: FC = () => {
  return (
    <div className="Footer">
      <Text text="Contact" textType={TextType.Headline} />
      <div className="Footer-LinkContainer">
        <LinkContainer linkText='Github' linkRef="#" />
        <LinkContainer linkText='LinkedIn' linkRef="#" />
        <LinkContainer linkText='Instagram' linkRef="#" />
      </div>
    </div>
  );
}

export default Footer;
 