import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './AppNavigation.scss';
import { LogOutBtn } from '..';

type Props = {
  isAuthorized: boolean;
  logOut: any;
};

export const AppNavigation: React.FunctionComponent<Props> = ({
  isAuthorized,
  logOut
}) => {
  return (
    <nav className="App-navigation">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="my-active">
            Home
          </NavLink>
        </li>
        {isAuthorized ? (
          <li>
            <NavLink to="/posts" activeClassName="my-active">
              Posts
            </NavLink>
          </li>
        ) : (
          ''
        )}
        {isAuthorized ? (
          <li>
            <NavLink to="/albums" activeClassName="my-active">
              Albums
            </NavLink>
          </li>
        ) : (
          ''
        )}
        {isAuthorized ? (
          <li>
            <LogOutBtn logOut={logOut} btnName='Log out'/>
          </li>
        ) : (
          <li>
            <NavLink to="/login" activeClassName="my-active">
              Log in
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
