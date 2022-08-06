const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
export const getUserByEmail = async (email: string) => {
  const filterURLByEmail = `${BASE_URL}?email=${email}`;
  const userResponse = await fetch(filterURLByEmail);
  const userData = await userResponse.json();
  return userData;
};

export const getUserById = async (userId: number) => {
  const filterURLById = `${BASE_URL}?id=${userId}`;
  const userInfoResponse = await fetch(filterURLById);
  const userInfo = await userInfoResponse.json();
  return userInfo;
};
