import * as React from 'react';
import './BackBtn.scss';

type Props = {
  btnName: string;
  onClick: any;
};

export const BackBtn: React.FunctionComponent<Props> = ({
  btnName,
  onClick
}) => {
  return (
    <div className="App-btn-container">
      <div onClick={onClick()} className="App-back-btn">{btnName}</div>
    </div>
  );
};
