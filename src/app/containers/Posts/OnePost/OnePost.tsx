import * as React from 'react';
import { connect } from 'react-redux';


import { ReduxState } from '../../../store/reducers/root.reducer';
import { OneItem } from '../../../components';

type ReduxProps = {
  post: {
    id: number;
    title: string;
    content: string;
  };
};

class OnePost extends React.Component<ReduxProps> {
  componentDidMount() {}

  render() {
    const { post } = this.props;

    let onePostView;

    if (post.id === +0) {
      onePostView = '';
    } else {
      onePostView = (
        <OneItem oneItem={post} />
      );
    } 

    return (
      <React.Fragment>
        {onePostView}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {
    post: state.postReducer.post
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnePost);
