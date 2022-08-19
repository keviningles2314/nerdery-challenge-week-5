import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import UserPostCard from '../../components/UserPostCard';
import { getAllPosts } from '../../fetch/fetchPosts';
import { getPostImage } from '../../util/getImages';
import './allposts.css';
const AllPosts = () => {
  const mockId = 24;
  const [isLoading, setIsLoading] = useState(true);
  const [postsInformationArray, setPostsInformationArray] = useState([]);
  const [imageInformation, setImageInformation] = useState({
    download_url: '',
  });

  useEffect(() => {
    getAllPosts().then((postData) => {
      setPostsInformationArray(postData);
    });
    getPostImage(mockId).then((imageInfo) => {
      setImageInformation(imageInfo);
    });
    setIsLoading(false);
  }, []);

  return (
    <Layout>
      <div className='Allposts'>
        {!isLoading &&
          postsInformationArray.map((postInfo, key) => {
            return (
              <div key={key}>
                {!isLoading && (
                  <UserPostCard
                    postInfo={postInfo}
                    imageInfo={imageInformation}
                  />
                )}
              </div>
            );
          })}
      </div>
    </Layout>
  );
};
export default AllPosts;
//
