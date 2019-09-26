import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReduxState } from '../../../store/reducers/root.reducer';
import { RouteComponentProps } from 'react-router';
import { PageHeader, PageContent } from '../../../components';

type ReduxProps = {
  pageContent: any;
};


class FaqPageTwo extends Component<ReduxProps & RouteComponentProps<{}>>  {
  render() {
    const { pageContent } = this.props;

    return (
      <React.Fragment>
        <PageHeader title={pageContent.pageHeader.title} />
        <PageContent pageContent={pageContent.pageContent} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {
    pageContent: state.appReducer.faqPageTwo
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FaqPageTwo);
