import { FC } from 'react';
import './style.scss';

interface IState {
  text: string,
  textType: string,
}

const Text: FC<IState> = ({ text, textType }) => {
  return (
    <p className={`Text-${textType}`}>
      {text}
    </p>
  );
}

export default Text;
