import React, { Component } from 'react';
import { ReduxState } from '../../../store/reducers/root.reducer';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { PageHeader, BackBtn, PageContent } from '../../../components';

type ReduxProps = {
  pageContent: any;
};

class FaqPageOne extends Component<ReduxProps & RouteComponentProps<{}>> {
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
    pageContent: state.appReducer.faqPageOne
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FaqPageOne);
