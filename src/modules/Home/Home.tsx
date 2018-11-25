import * as React from 'react';
import { Layout } from 'src/components';
import Request from 'src/services/Request';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { spinner } from 'src/actions';

import './Home.scss';

interface Props {
  actions: any,
}

class Home extends React.Component<Props> {
  public async componentDidMount() {
    const { actions } = this.props;

    actions.spinner.show();

    const request = new Request();
    const users = await request.get('/');
    console.log(users);

    actions.spinner.hide();
  }

  public render() {
    return (
      <Layout>
        <div className="home-page">Home page</div>
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