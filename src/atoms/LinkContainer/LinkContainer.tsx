import { FC } from 'react';
import Text from '../Text/Text';

// import ArrowIcon from "./../../images/icon/arrow-link-icon.png";
import './style.scss';

interface IState {
  linkRef: string,
  linkText: string,
}

const LinkContainer: FC<IState> = ({ linkRef, linkText }) => {
  return (
    <div className="LinkContainer">
        <Text text={linkText} textType="ordinary" />
        {/* <img src={ArrowIcon} alt="" /> */}
    </div>
  );
}

export default LinkContainer;
