import { useEffect, useState } from 'react';
import UserPostCard from '../../components/UserPostCard';
import { getPostImage } from '../../util/getImages';
import { getPostsByUser } from '../../util/getPosts';

import './userPosts.css';

interface IProps {
  userId: number;
}

const UserPosts = ({ userId }: IProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [postsInformation, setPostsInformation] = useState([]);
  const [imageInformation, setImageInformation] = useState({
    download_url: '',
  });
  useEffect(() => {
    getPostImage(userId).then((imageData) => {
      setImageInformation(imageData);
    });
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
            {!isLoading && (
              <UserPostCard postInfo={postInfo} imageInfo={imageInformation} />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default UserPosts;
//
