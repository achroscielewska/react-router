import * as React from 'react';
import './PageHeader.scss';

type Props = {
  title: string;
};

export const PageHeader: React.FunctionComponent<Props> = ({ title }) => {
  return (
    <div className="App-page-header">
      <h1 className="App-page-header-title">{title}</h1>
    </div>
  );
};
