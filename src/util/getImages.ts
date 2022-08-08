import { getImageById } from '../fetch/fetchImage';

export const getPostImage = async (imageId: number | string | undefined) => {
  const imageInformation = await getImageById(imageId);
  return imageInformation;
};
