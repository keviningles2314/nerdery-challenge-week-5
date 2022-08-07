import { getPostsByUserId } from '../fetch/fetchPosts';

export const getPostsByUser = async (userId: number) => {
  const postInfo = await getPostsByUserId(userId);
  return postInfo;
};
