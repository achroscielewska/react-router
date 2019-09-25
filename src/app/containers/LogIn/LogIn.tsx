import * as React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';

import { ReduxState } from '../../store/reducers/root.reducer';
import { RouteComponentProps } from 'react-router-dom';

type ReduxProps = {
  logIn: any;
};

class LogIn extends React.Component<ReduxProps & RouteComponentProps<{}>> {
  componentDidMount() {}

  logIn = () => {
    this.props.logIn();
    this.props.history.push('/posts')
  }

  render() {
    return (
      <React.Fragment>
        <div className="App-btn-container">
          <div onClick={this.logIn} className="App-back-btn">
            LOG IN
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logIn: () => dispatch(actionCreators.logIn())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
