const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
export const getUserByEmail = async (email: string) => {
  const filterURLByEmail = `${BASE_URL}?email=${email}`;
  const userResponse = await fetch(filterURLByEmail);
  const userData = await userResponse.json();
  return userData;
};
