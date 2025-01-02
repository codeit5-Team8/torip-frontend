/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface IFileUploaderProps {
  defaultFile?: string | null; // 기본값으로 파일 경로가 주어질 수 있음
  onFileChange: (file: File | null) => void; // 파일 변경 시 호출되는 콜백
}

const FileUploader: React.FC<IFileUploaderProps> = ({
  defaultFile,
  onFileChange,
}) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  useEffect(() => {
    // 기본 파일 경로가 주어졌을 경우 미리보기 URL 설정
    if (defaultFile) {
      setPreviewURL(defaultFile);
    }
  }, [defaultFile]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setUploadedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewURL(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewURL(null);
    }

    onFileChange(file);
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setPreviewURL(null);
    onFileChange(null);
  };

  return (
    <>
      <header className="mb-5 text-base font-semibold text-slate-800">
        자료
      </header>
      <div className="mx-auto w-full max-w-md">
        {previewURL ? (
          <div className="relative rounded-lg border bg-gray-50 p-4">
            <Image
              width={0}
              height={0}
              style={{ width: '100%', height: 'auto' }}
              src={`/${previewURL}`}
              alt={`/${previewURL}`}
              className="mb-4 h-auto max-h-64 w-full rounded-lg border object-contain"
            />
            <button
              type="button"
              onClick={handleRemoveFile}
              className="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              ×
            </button>
          </div>
        ) : (
          <label
            htmlFor="file-upload"
            className="flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:border-blue-500 hover:bg-blue-50"
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl text-gray-400">+</span>
              <span className="text-sm text-gray-500">
                파일을 업로드해주세요
              </span>
            </div>
            <input
              id="file-upload"
              type="file"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        )}
      </div>
    </>
  );
};

export default FileUploader;
