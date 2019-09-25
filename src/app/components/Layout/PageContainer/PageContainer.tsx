import * as React from 'react';
import './PageContainer.scss';


export const PageContainer: React.FunctionComponent = ({children}) => {
  return <div className="App-page-container">{children}</div>;
};
