import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} />
    ))}
  </div>
);
