import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './AppNavigation.scss';

export const AppNavigation: React.FunctionComponent = () => {
  return (
    <nav className="App-navigation">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="my-active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" activeClassName="my-active">
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink to="/albums" activeClassName="my-active">
            Albums
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
