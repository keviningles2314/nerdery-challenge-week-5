import { useEffect, useState } from 'react';
import { getPostImage } from '../../util/getImages';
import { getUserInfo } from '../../util/getUser';
import './usercard.css';
interface IUserCardProps {
  userId: number;
}
const UserCardInfo = ({ userId }: IUserCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageInformation, setImageInformation] = useState({
    download_url: '',
  });
  const [userInformation, setUserInformation] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
    },
  });
  useEffect(() => {
    getPostImage(userId).then((imageData) => {
      setImageInformation(imageData);
    });
    getUserInfo(userId).then((userData) => {
      setUserInformation(userData[0]);
      setIsLoading(false);
    });
  }, []);
  return (
    <div className='user-content'>
      <div className='user-image-content'>
        <img
          src={imageInformation.download_url}
          className='image-user'
          alt='user_image'
        />
        {!isLoading && (
          <>
            <h3>{userInformation.name}</h3>
            <p>{userInformation.username}</p>
            <p>{userInformation.email}</p>
          </>
        )}
      </div>
      {!isLoading && (
        <>
          <p>{userInformation.phone}</p>
          <p>{userInformation.email}</p>
          <p>{`${userInformation.address.street}, ${userInformation.address.city}`}</p>
        </>
      )}
    </div>
  );
};
export default UserCardInfo;
//
