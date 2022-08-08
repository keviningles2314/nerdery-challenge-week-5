const IMAGE_BASE_URL = 'https://picsum.photos';

export const getImageById = async (imageId: number) => {
  // id/0/info
  const URL_IMAGE_BY_ID = `${IMAGE_BASE_URL}/id/${imageId}/info`;
  const imageInfoResponse = await fetch(URL_IMAGE_BY_ID);
  const imageInfoData = await imageInfoResponse.json();
  return imageInfoData;
};
