export type TFileRequest = {
  fileName: string;
};

export type TFileResponse = {
  result: {
    signedUrl: string;
    filePath?: string;
  };
};
