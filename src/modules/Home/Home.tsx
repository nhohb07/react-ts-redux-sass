import * as React from 'react';
import { Layout } from 'src/components';
import Request from 'src/services/Request';

import Redux from 'src/services/Redux';

import './Home.scss';

interface Props {
  spinnerActions: any,
}

class Home extends React.Component<Props> {
  public async componentDidMount() {
    const { spinnerActions } = this.props;
    console.log(this.props)

    spinnerActions.show();

    const request = new Request();
    const users = await request.get('/comments', { test: 123, test2: 'abc' });
    console.log(users);

    spinnerActions.hide();
  }

  public render() {
    return (
      <Layout>
        <div className="home-page">Home page</div>
      </Layout>
    );
  }
}

export default Redux.connect(['spinner'], ['spinner'])(Home);