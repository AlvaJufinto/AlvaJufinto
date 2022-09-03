import React, { FC } from 'react';

// atoms 
import Text, { TextType } from '../../atoms/Text/Text';

// molecules
import TechStackImage from '../../molecules/TechStackImagesContainer/TechStackImage';
import DescriptionContainer from '../../molecules/DescriptionContainer/DescriptionContainer';

import "./style.scss" 

const StackContainer: FC = () => {
  return (
    <div className="StackContainer">
      <DescriptionContainer title="My Tech Stack">
        <Text text="Javascript is such a flexible and reliable Programming Language!" textType={TextType.Ordinary} />
        <div className="StackContainer-images">
            <TechStackImage />
        </div>
      </DescriptionContainer>
    </div>
  );
}

export default StackContainer;
