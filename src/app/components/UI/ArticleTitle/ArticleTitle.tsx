import * as React from 'react';
import './ArticleTitle.scss';

type Props = {
  title: string;
};

export const ArticleTitle: React.FunctionComponent<Props> = ({ title }) => {
  return (
    <div className="App-article-header">
      <h2 className="App-article-title">{title}</h2>
    </div>
  );
};
