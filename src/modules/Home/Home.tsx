import * as React from 'react';

import { Layout } from 'src/components';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { spinner } from 'src/actions';

interface Props {
  actions: any,
}

class Home extends React.Component<Props> {
  public componentDidMount() {
    const { actions } = this.props;

    actions.spinner.show();

    setTimeout(() => actions.spinner.hide(), 2000);
  }

  public render() {
    return (
      <Layout>
        <div>Home page</div>
      </Layout>
    );
  }
}

const mapActionToProps = (dispatch: any) => ({
  actions: {
    spinner: bindActionCreators(spinner, dispatch),
  },
});

export default connect(null, mapActionToProps)(Home);