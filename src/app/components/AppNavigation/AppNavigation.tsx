import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './AppNavigation.scss';
import { NavBtnsList } from './NavBtnsList/NavBtnsList';

type Props = {
  navBtns: Array<{
    exact: boolean;
    to: string;
    activeClassName: string;
    name: string;
    children?: [{ exact: boolean; to: string; name: string }];
  }>;
};

export const AppNavigation: React.FunctionComponent<Props> = ({ navBtns }) => {
  return (
    <nav className="App-navigation">
      <NavBtnsList navBtns={navBtns}/>
    </nav>
  );
};
