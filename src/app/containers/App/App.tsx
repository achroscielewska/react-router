import * as React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ReduxState } from '../../store/reducers/root.reducer';

import { PageContainer, AppNavigation } from '../../components';
import {
  Albums,
  NewPost,
  Posts,
  Home,
  PageNotFound,
  FaqPageOne,
  FaqPageTwo
} from '..';

type ReduxProps = {
  token: string;
  navBtns: any;
};

const RoutePaths = [
  {
    component: Albums,
    path: '/albums'
  },
  {
    component: NewPost,
    path: '/posts/newPost'
  },
  {
    component: Posts,
    path: '/posts'
  },
  {
    component: FaqPageOne,
    path: '/faq/page1'
  },
  {
    component: FaqPageTwo,
    path: '/faq/page2'
  },
  {
    component: Home,
    path: '/faq'
  },
  {
    component: Home,
    path: '/'
  },
  {
    component: PageNotFound
  }
];

class App extends React.Component<ReduxProps> {
  componentDidMount() {}

  render() {
    const { navBtns } = this.props;

    let routes;
    routes = RoutePaths.map((route, i = 0) => {
      return <Route key={++i} path={route.path} component={route.component} />;
    });

    return (
      <main>
        <BrowserRouter>
          <AppNavigation navBtns={navBtns} />
          <PageContainer>
            <Switch>{routes}</Switch>
          </PageContainer>
        </BrowserRouter>
      </main>
    );
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {
    token: state.appReducer.token,
    navBtns: state.appReducer.navBtns
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
