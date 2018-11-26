import Request from './Request';
import { Response } from './Request';
import { Post } from 'src/models';

export interface PostService {
  getAll(): Promise<Array<Post>>,
}

export class PostServiceImpl extends Request implements PostService {
  public async getAll() {
    const posts: Response = await this.get('/posts');
    return posts.data;
  }
}