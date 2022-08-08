import Layout from '../../components/Layout';
import { useParams } from 'react-router-dom';
import './postdetail.css';
import { getPostInfo } from '../../util/getPosts';
import { useEffect, useState } from 'react';
import CommentsCard from '../../components/CommentsCard';
import UserCardInfo from '../../components/UserCardInfo';
import { getPostImage } from '../../util/getImages';
interface IPostData {
  title: string;
  body: string;
  userId: number;
}

const PostDetail = () => {
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [postInformationData, setPostInformationData] = useState<IPostData>({
    title: '',
    body: '',
    userId: 0,
  });
  const [imageInformation, setImageInformation] = useState({
    download_url: '',
  });
  const [postCommentsInformation, setPostCommentsInformation] = useState([]);
  const { postId } = useParams<{ postId?: string }>();
  useEffect(() => {
    getPostImage(postId).then((imageData) => {
      setImageInformation(imageData);
      console.log(imageInformation);
    });
    getPostInfo(postId).then((postData) => {
      setPostInformationData(postData.postInformation);
      setPostCommentsInformation(postData.postComments);
      setIsLoadingData(false);
    });
  }, []);

  return (
    <Layout>
      <div className='PostDetail'>
        <div className='postDetail-container'>
          <div className='top-content'>
            <div className='detail-header'>
              {!isLoadingData && <h2>{postInformationData.title}</h2>}
              <img
                src={imageInformation.download_url}
                className='header-img'
                alt='post_image'
              />
            </div>
            <div className='user-information-block'>
              {!isLoadingData && (
                <UserCardInfo userId={postInformationData.userId} />
              )}
            </div>
          </div>
          <div className='detail-description'>
            {!isLoadingData && <h3>{postInformationData.body}</h3>}
          </div>
          <div className='Comments'>
            <h2>Comments: </h2>
            {!isLoadingData &&
              postCommentsInformation.map(
                (
                  commentData: { name: string; body: string; email: string },
                  key
                ) => {
                  return (
                    <div key={key} className='comment-block'>
                      <CommentsCard commentInfo={commentData} />
                    </div>
                  );
                }
              )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default PostDetail;
