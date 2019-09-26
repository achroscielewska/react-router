import * as React from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router-dom';

import { ReduxState } from '../../store/reducers/root.reducer';
import * as actionCreators from '../../store/actions/index';

import { PageHeader, PageContent, ListItem, ArticleNavigation } from '../../components';

import { OnePost } from '..';

type ReduxProps = {
  pageContent: {
    pageHeader: {
      title: string;
    };
    pageContent: {
      articleTitle: string;
      article: string;
      list: {
        id: number;
        title: string;
        content: string;
      }[];
    };
  };
  post: any;
  getPost: (post: any) => void;
};

class Posts extends React.Component<ReduxProps & RouteComponentProps<{}>> {
  componentDidMount() {}

  getPostData = (id: number) => {
    this.props.getPost(id);
    this.props.history.push({pathname: this.props.match.path+ '/'+ id})
  };

  render() {
    const { pageContent } = this.props;

    let listView;

    if (pageContent.pageContent.list) {
      listView = pageContent.pageContent.list.map(
        (item: { id: any; title: string; content: string }) => {
          return (
            <ListItem item={item} key={item.id} onGetPost={this.getPostData} />
          );
        }
      );
    }

    return (
      <React.Fragment>
        <PageHeader title={pageContent.pageHeader.title} />
        <PageContent pageContent={pageContent.pageContent} />
        <ArticleNavigation link={this.props.match.path + '/newPost'} linkName="New post"/>
        {listView}
        <Route path={'/posts/:id'}  component={OnePost} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {
    pageContent: state.appReducer.postsPageContent,
    post: state.postReducer.post
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getPost: (post: any) => dispatch(actionCreators.getPost(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
