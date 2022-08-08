import { useEffect, useState } from 'react';
import { getUserInfo } from '../../util/getUser';

interface IUserCardProps {
  userId: number;
}
const UserCardInfo = ({ userId }: IUserCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
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
    getUserInfo(userId).then((userData) => {
      setUserInformation(userData[0]);
      setIsLoading(false);
    });
  }, []);
  console.log(userInformation);
  return (
    <div className='user-content'>
      {!isLoading && (
        <>
          <h1>{userInformation.name}</h1>
          <p>{userInformation.username}</p>
          <p>{userInformation.email}</p>
          <p>{userInformation.phone}</p>
          <p>{`${userInformation.address.street}, ${userInformation.address.city}`}</p>
        </>
      )}
    </div>
  );
};
export default UserCardInfo;
