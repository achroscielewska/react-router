import * as React from 'react';
import './Article.scss';

type Props = {
  article: string;
};

export const Article: React.FunctionComponent<Props> = ({ article }) => {
  return (
    <div className="App-article-container">
      <p className="App-article">{article}</p>
    </div>
  );
};
