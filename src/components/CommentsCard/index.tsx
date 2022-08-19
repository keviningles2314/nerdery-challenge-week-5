import { PropsWithChildren } from 'react';
import './commentCard.css';
interface ICommentsProps {
  commentInfo: {
    name: string;
    body: string;
    email: string;
  };
}
//
const CommentsCard = ({ commentInfo }: ICommentsProps) => {
  return (
    <div className='CommentsCard'>
      <div className='comment-content'>
        <h3>{commentInfo.name}</h3>
        <p>{commentInfo.body}</p>
      </div>
      <div className='email'>
        <p>{commentInfo.email}</p>
      </div>
    </div>
  );
};
export default CommentsCard;
