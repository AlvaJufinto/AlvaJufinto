import React, { FC } from 'react';

// atoms 
import Text, { TextType } from '../../atoms/Text/Text';
import LinkContainer from '../../atoms/LinkContainer/LinkContainer';

// molecules
import PortfolioImageContainer from '../../molecules/ProfileImageContainer/PortfolioImageContainer'
import DescriptionContainer from '../../molecules/DescriptionContainer/DescriptionContainer';

import "./style.scss"

const ProfileContainer: FC = () => {
  return (
    <div className="ProfileContainer">
      <PortfolioImageContainer emoticon='🎉' />
      <div className="ProfileContainer-bottom">
        <DescriptionContainer title="Hello! I’m Alva,">
          <Text text="A frontend developer who loves programming for almost 3 years. I have made several projects related to web application, bots, and API. " textType={TextType.Ordinary} />
        </DescriptionContainer>
        <LinkContainer linkText='My Curriculum Vitae' linkRef='#' />
      </div>
    </div>
  );
}

export default ProfileContainer;
