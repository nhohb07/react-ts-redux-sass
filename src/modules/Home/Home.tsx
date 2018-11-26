import * as React from 'react';
import { Layout } from 'src/components';
import Redux from 'src/services/Redux';
import Request from 'src/services/Request';

import './Home.scss';

interface Props {
  request: any,
  requestActions: any
}

class Home extends React.Component<Props> {
  public async componentDidMount() {
    const request = new Request();
    const users = await request.get('/comments', { test: 123, test2: 'abc' });
    console.log('comments', users);
  }

  public render() {
    console.log('spinner', this.props);

    return (
      <Layout>
        <div className="home-page">Home page</div>
      </Layout>
    );
  }
}

export default Redux.connect(['request'])(Home);