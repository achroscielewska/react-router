import * as React from 'react';
import './ListItem.scss';

type Props = {
  item: {
    id: number;
    title: string;
    content: string;
  };
  onGetPost: any
};

export const ListItem: React.FunctionComponent<Props> = ({ item, onGetPost }) => {
  return (
    <div className="App-item" onClick={() => onGetPost(item.id)}>
      <p>{item.title}</p>
    </div>
  );
};
