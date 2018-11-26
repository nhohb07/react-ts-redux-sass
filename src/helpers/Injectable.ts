import { Container } from 'inversify';
import getDecorators from "inversify-inject-decorators";

import { PostService, PostServiceImpl } from 'src/services/PostService';

export const container = new Container();

container.bind<PostService>("postService").to(PostServiceImpl);

export const lazyInject = getDecorators(container).lazyInject;