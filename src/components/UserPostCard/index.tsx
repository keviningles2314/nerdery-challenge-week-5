import { Link } from 'react-router-dom';
import './postcard.css';
interface IPostProps {
  postInfo: {
    id: number;
    userId: number;
    title: string;
    body: string;
  };
  imageInfo: {
    download_url: string;
  };
}

const UserPostCard = ({ postInfo, imageInfo }: IPostProps) => {
  return (
    <div className='userPostCard'>
      <Link to={`/posts/${postInfo.id}`} className='redirect-block'>
        <div className='img-content'>
          <img
            className='post-img'
            src={imageInfo.download_url}
            alt='post-img'
          />
        </div>
        <div className='post-info'>
          <p>
            <b>{postInfo.title}</b>
          </p>
          <p>{postInfo.body}</p>
        </div>
      </Link>
    </div>
  );
};
export default UserPostCard;
//
