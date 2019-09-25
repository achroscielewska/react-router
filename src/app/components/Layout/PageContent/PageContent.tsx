import * as React from 'react';
import './PageContent.scss';
import { ArticleTitle, Article } from '../..';

type Props = {
  pageContent: {
    articleTitle: string;
    article: string;
    list: {
      id: number;
      title: string;
      content: string;
    }[];
  };
};

export const PageContent: React.FunctionComponent<Props> = ({
  pageContent
}) => {
  

  return (
    <div className="App-page-content">
      <ArticleTitle title={pageContent.articleTitle} />
      <Article article={pageContent.article} />
    </div>
  );
};
