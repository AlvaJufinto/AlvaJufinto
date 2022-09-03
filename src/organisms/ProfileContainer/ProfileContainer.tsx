import React, { FC } from 'react';

// atoms 
import Text, { TextType } from '../../atoms/Text/Text';

// molecules
import PortfolioImageContainer from '../../molecules/ProfileImageContainer/PortfolioImageContainer'
import DescriptionContainer from '../../molecules/DescriptionContainer/DescriptionContainer';

const ProfileContainer: FC = () => {
  return (
    <div className="ProfileContainer">
      <PortfolioImageContainer emoticon='🎉' />
      <DescriptionContainer title="Hello! I’m Alva,">
        <Text text="A frontend developer who loves programming for almost 3 years. I have made several projects related to web application, bots, and API. " textType={TextType.Ordinary} />
      </DescriptionContainer>
    </div>
  );
}

export default ProfileContainer;
