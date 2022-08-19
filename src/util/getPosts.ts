import {
  getCommentsByPostId,
  getPostInfoById,
  getPostsByUserId,
} from '../fetch/fetchPosts';

export const getPostsByUser = async (userId: number) => {
  const postInfo = await getPostsByUserId(userId);
  return postInfo;
};

export const getPostInfo = async (postId: string | undefined) => {
  const postInformation = await getPostInfoById(postId);
  const postComments = await getCommentsByPostId(postId);

  return {
    postInformation,
    postComments,
  };
};
//
