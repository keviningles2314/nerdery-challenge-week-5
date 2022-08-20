const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPostsByUserId = async (userId: number) => {
  const URL_POSTS_BY_USER = `${BASE_URL}?userId=${userId}`;
  const postsResponse = await fetch(URL_POSTS_BY_USER);
  const postsData = await postsResponse.json();
  return postsData;
};

export const getPostInfoById = async (postId: string | undefined) => {
  const URL_POST_BY_ID = `${BASE_URL}/${postId}`;
  const postInfoResponse = await fetch(URL_POST_BY_ID);
  const postInfoData = await postInfoResponse.json();
  return postInfoData;
};

export const getCommentsByPostId = async (postId: string | undefined) => {
  const URL_COMMENTS_BY_POST = `${BASE_URL}/${postId}/comments`;
  const commentsResponse = await fetch(URL_COMMENTS_BY_POST);
  const commentsData = await commentsResponse.json();
  return commentsData;
};

export const getAllPosts = async () => {
  const allPostsResponse = await fetch(BASE_URL);
  const allPostsData = await allPostsResponse.json();
  return allPostsData;
};
