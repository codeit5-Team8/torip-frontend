import { postFileUpload } from '@lib/api/service/file.api';
import axios from 'axios';

export const useUploadFile = async (file: File, fileName: string) => {
  const response = await postFileUpload({ fileName });
  const presignedUrl = response.result.signedUrl;
  await uploadImageToS3(presignedUrl, file);
  return response.result;
};

const uploadImageToS3 = async (url: string, file: File) => {
  axios.put(url, file);
};
