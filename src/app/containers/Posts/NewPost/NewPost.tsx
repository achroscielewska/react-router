import * as React from 'react';
import { connect } from 'react-redux';


import { ReduxState } from '../../../store/reducers/root.reducer';
import { PageHeader, PageContent, BackBtn } from '../../../components';
import { RouteComponentProps } from 'react-router-dom';

type ReduxProps = {
  pageContent: any;
};

class NewPost extends React.Component<ReduxProps & RouteComponentProps<{}>> {
  componentDidMount() {}

  render() {
    const { pageContent } = this.props;

    return (
      <React.Fragment>
      
        <PageHeader title={pageContent.pageHeader.title} />
        <BackBtn onClick={()=>this.props.history.goBack} btnName="back" />
        <PageContent pageContent={pageContent.pageContent} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {
    pageContent: state.appReducer.newPostPageContent
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost);
