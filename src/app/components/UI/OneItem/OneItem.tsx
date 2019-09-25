import * as React from 'react';
import './OneItem.scss';

type Props = {
  oneItem: {
    title: string;
    content: string;
  };
};

export const OneItem: React.FunctionComponent<Props> = ({ oneItem }) => {
  return (
    <div className="App-one-item">
      <p>{oneItem.title}</p>
      <p>{oneItem.content}</p>
    </div>
  );
};
