import { useEffect, useState } from 'react';
import UserPostCard from '../../components/UserPostCard';
import { getPostsByUser } from '../../util/getPosts';

import './userPosts.css';

interface IProps {
  userId: number;
}

const UserPosts = ({ userId }: IProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [postsInformation, setPostsInformation] = useState([]);
  useEffect(() => {
    getPostsByUser(userId).then((postData) => {
      setPostsInformation(postData);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className='UserPosts'>
      {isLoading && <h1 className='loading'>LOADING...</h1>}
      {postsInformation.map((postInfo, key) => {
        return (
          <div key={key}>
            {!isLoading && <UserPostCard postInfo={postInfo} />}
          </div>
        );
      })}
    </div>
  );
};
export default UserPosts;
