import { Link } from 'react-router-dom';
import './postcard.css';
interface IPostProps {
  postInfo: {
    id: number;
    userId: number;
    title: string;
    body: string;
  };
}

const UserPostCard = ({ postInfo }: IPostProps) => {
  return (
    <div className='userPostCard'>
      <Link to={`/posts/${postInfo.id}`} className='redirect-block'>
        <p>
          <b>{postInfo.title}</b>
        </p>
        <p>{postInfo.body}</p>
      </Link>
    </div>
  );
};
export default UserPostCard;
