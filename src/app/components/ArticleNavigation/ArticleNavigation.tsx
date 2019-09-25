import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './ArticleNavigation.scss';

type Props = {
  link: string,
  linkName: string
}

export const ArticleNavigation: React.FunctionComponent<Props> = ({link, linkName}) => {
  return (
    <nav className="App-article-navigation">
      <ul>
        <li>
          <NavLink to={link}>
            {linkName}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
