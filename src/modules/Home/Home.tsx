import * as React from 'react';
import { Props, State } from './ComponentInterface';

import { Layout } from 'src/components';
import Redux from 'src/services/Redux';
import { PostServiceImpl } from 'src/services';
import { Post } from 'src/models';

import './Home.scss';

class Home extends React.Component<Props, State> {
  public async componentDidMount() {
    const postService = new PostServiceImpl();
    const posts: Array<Post> = await postService.getAll();

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