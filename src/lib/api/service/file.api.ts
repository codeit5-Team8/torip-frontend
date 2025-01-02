import { TFileRequest, TFileResponse } from '@model/file.model';
import { post } from '../axios';

export const postFileUpload = async (data: TFileRequest) => {
  const response = await post<TFileResponse>(
    `api/v1/torip/s3/upload?fileName=${data.fileName}`,
  );
  return response.data;
};
