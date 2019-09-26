import * as React from 'react';
import { Suspense } from 'react';

import { connect } from 'react-redux';

import {
  BrowserRouter,
  Switch,
  Route,
  RouteComponentProps
} from 'react-router-dom';

import { ReduxState } from '../../store/reducers/root.reducer';

import { PageContainer, AppNavigation } from '../../components';

const Albums = React.lazy(() => import('../Albums/Albums'));
const NewPost = React.lazy(() => import('../Posts/NewPost/NewPost'));
const Posts = React.lazy(() => import('../Posts/Posts'));
const Home = React.lazy(() => import('../Home/Home'));
const PageNotFound = React.lazy(() => import('../staticPages/PageNotFound'));

type ReduxProps = {
  token: string;
};

class App extends React.Component<ReduxProps & RouteComponentProps<{}> & any> {
  componentDidMount() {}

  render() {
    return (
      <main>
        <BrowserRouter>
          <AppNavigation />
          <PageContainer>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path={'/albums'} component={Albums} />
                <Route path={'/posts/newPost'} component={NewPost} />
                <Route path="/posts" component={Posts} />
                <Route path={'/'} component={Home} />
                <Route component={PageNotFound} />
              </Switch>
            </Suspense>
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
