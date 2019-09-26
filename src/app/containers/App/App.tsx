import * as React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ReduxState } from '../../store/reducers/root.reducer';

import { PageContainer, AppNavigation } from '../../components';
import { Albums, NewPost, Posts, Home, PageNotFound } from '..';

type ReduxProps = {
  token: string;
};

class App extends React.Component<ReduxProps> {
  componentDidMount() {}

  render() {
    return (
      <main>
        <BrowserRouter>
          <AppNavigation />
          <PageContainer>
            <Switch>
              <Route path={'/albums'} component={Albums} />
              <Route path={'/posts/newPost'} component={NewPost} />
              <Route path={'/posts'} component={Posts} />
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
    token: state.appReducer.token
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
