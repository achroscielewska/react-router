import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBtnsList.scss';

type Props = {
  navBtns: Array<{
    exact: boolean;
    to: string;
    activeClassName: string;
    name: string;
    children?: [{ exact: boolean; to: string; name: string }];
  }>;
};

export const NavBtnsList: React.FunctionComponent<Props> = ({ navBtns }) => {
  let btnsList;

  const createSubList = (
    itemsList: Array<{ exact: boolean; to: string; name: string }>
  ) => {
    let itemsListView;

    itemsListView = itemsList.map(item => {
      return (
        <li>
          <NavLink to={item.to}>{item.name}</NavLink>
        </li>
      );
    });

    return <ul className="App-navigation-items-list">{itemsListView}</ul>;
  };

  btnsList = navBtns.map(btn => {
    return (
      <li key={btn.name}>
        <NavLink
          exact={btn.exact}
          to={btn.to}
          activeClassName={btn.activeClassName}
        >
          {btn.name}
        </NavLink>
        {btn.children ? createSubList(btn.children) : ''}
      </li>
    );
  });

  return <ul className="App-navigation-btns-list">{btnsList}</ul>;
};
