import * as React from 'react';
import './LogOutBtn.scss';

type Props = {
  btnName: string;
  logOut: any;
};

export const LogOutBtn: React.FunctionComponent<Props> = ({
  btnName,
  logOut
}) => {
  return (
    <div className="App-logout-btn">
      <div onClick={() => logOut()}>{btnName}</div>
    </div>
  );
};
