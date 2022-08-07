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
      <p>
        <b>{postInfo.title}</b>
      </p>
      <p>{postInfo.body}</p>
    </div>
  );
};
export default UserPostCard;
