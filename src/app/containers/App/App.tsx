import * as React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ReduxState } from '../../store/reducers/root.reducer';

import * as actionCreators from '../../store/actions/index';

import PageNotFound from '../staticPages/PageNotFound';
import Home from '../Home/Home';
import Posts from '../Posts/Posts';
import Albums from '../Albums/Albums';
import NewPost from '../Posts/NewPost/NewPost';
import LogIn from '../LogIn/LogIn';

import { PageContainer, AppNavigation } from '../../components';

type ReduxProps = {
  isAuthorized: boolean;
  logOut: any
};

class App extends React.Component<ReduxProps>  {
  componentDidMount() {}

  logOut = () => {
    this.props.logOut();
  }

  render() {
    const { isAuthorized } = this.props;

    return (
      <main>
        <BrowserRouter>
          <AppNavigation isAuthorized={isAuthorized} logOut={this.logOut} />
          <PageContainer>
            <Switch>
              {isAuthorized ? <Route path={'/albums'} component={Albums} /> : ''}
              {isAuthorized ? <Route path={'/posts/newPost'} component={NewPost} />: ''}
              {isAuthorized ? <Route path={'/posts'} component={Posts} />: ''}
              {!isAuthorized ? <Route path={'/login'} component={LogIn} /> : ''}
              <Route path={'/'} component={Home} />
              <Route component={PageNotFound} />
            </Switch>
          </PageContainer>
        </BrowserRouter>
      </main>
    );
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {
    isAuthorized: state.appReducer.isAuthorized
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logOut: () => dispatch(actionCreators.logOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
