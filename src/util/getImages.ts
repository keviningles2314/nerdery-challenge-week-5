import { getImageById } from '../fetch/fetchImage';

export const getPostImage = async (imageId: number) => {
  const imageInformation = await getImageById(imageId);
  return imageInformation;
};
