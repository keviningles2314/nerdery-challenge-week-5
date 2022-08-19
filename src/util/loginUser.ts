import { getUserByEmail } from '../fetch/fetchUser';

const setUserToLocalStorage = (user: { id: number }) => {
  localStorage.setItem('user', JSON.stringify(user.id));
};
export const loginUser = async (email: string) => {
  const userInfo = await getUserByEmail(email);
  if (userInfo.length > 0) {
    setUserToLocalStorage(userInfo[0]);
    return true;
  } else {
    return false;
  }
};

export const isUserLogged = () => {
  if (localStorage.length > 0) {
    const userID = JSON.parse(localStorage.getItem('user')!);
    return { userID, isLogged: true };
  } else {
    return { user: null, isLogged: false };
  }
};

export const userLogOut = () => {
  localStorage.clear();
};
//
