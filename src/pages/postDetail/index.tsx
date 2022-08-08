import Layout from '../../components/Layout';
import { useParams } from 'react-router-dom';
import './postdetail.css';
import { getPostInfo } from '../../util/getPosts';
import { useEffect, useState } from 'react';
import CommentsCard from '../../components/CommentsCard';
interface IPostData {
  title: string;
  body: string;
}

const PostDetail = () => {
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [postInformationData, setPostInformationData] = useState<IPostData>({
    title: '',
    body: '',
  });
  const [postCommentsInformation, setPostCommentsInformation] = useState([]);
  const { postId } = useParams<{ postId?: string }>();
  useEffect(() => {
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
            </div>
            <div className='user-information-block'>
              <h1>name</h1>
              <p>userName</p>
              <p>email</p>
              <p>phone</p>
              <p>email</p>
              <p>address</p>
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
