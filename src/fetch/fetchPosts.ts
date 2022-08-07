const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPostsByUserId = async (userId: number) => {
  const URL_POSTS_BY_USER = `${BASE_URL}?userId=${userId}`;
  const postsResponse = await fetch(URL_POSTS_BY_USER);
  const postsData = await postsResponse.json();
  return postsData;
};
