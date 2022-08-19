import { getUserById } from '../fetch/fetchUser';

export const getUserInfo = async (userId: number) => {
  const userInfo = await getUserById(userId);
  return userInfo;
};
//
