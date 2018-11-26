import * as React from 'react';
import { Props, State } from './ComponentInterface';

import 'reflect-metadata';
import { lazyInject } from 'src/helpers/Injectable';

import { Layout } from 'src/components';
import Redux from 'src/helpers/Redux';
import { PostService } from 'src/services';

import './Home.scss';

class Home extends React.Component<Props, State> {
  @lazyInject('postService') private readonly postService: PostService;

  public async componentDidMount() {
    const posts = await this.postService.getAll();

    for (let post of posts) {
      console.log(post.body);
    }
  }

  public render() {
    return (
      <Layout>
        <div className="home-page">Home page</div>
      </Layout>
    );
  }
}

export default Redux.connect(['request'])(Home);