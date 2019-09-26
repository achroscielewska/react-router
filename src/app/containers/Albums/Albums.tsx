import * as React from 'react';
import { connect } from 'react-redux';

import { ReduxState } from '../../store/reducers/root.reducer';
import { PageHeader, PageContent } from '../../components';

type ReduxProps = {
  pageContent: any;
};

class Albums extends React.Component<ReduxProps> {
  componentDidMount() {}

  render() {
    const { pageContent } = this.props;

    return (
      <React.Fragment>
        <PageHeader title={pageContent.pageHeader.title} />
        <PageContent pageContent={pageContent.pageContent} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {
    pageContent: state.appReducer.albumsPageContent
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);

