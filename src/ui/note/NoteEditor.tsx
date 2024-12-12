'use client';

import { EDITOR_TOOLBAR, NOTE_PLACEHOLDER } from '@constant/note';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

interface INoteEditorProps {
  editorRef: React.MutableRefObject<Editor | null>;
}

export default function NoteEditor({ editorRef }: INoteEditorProps) {
  const { setValue } = useFormContext();

  useEffect(() => {
    // 맨 처음에 빈 값으로 초기화
    editorRef?.current?.getInstance().setHTML('');
  }, [editorRef]);

  const handleEditorChange = () => {
    if (editorRef) {
      // editor 변경 시 form에 반영
      setValue('content', editorRef?.current?.getInstance().getHTML());
    }
  };

  return (
    <>
      {editorRef && (
        <Editor
          previewStyle="vertical"
          height="500px"
          initialEditType="wysiwyg"
          ref={editorRef}
          toolbarItems={EDITOR_TOOLBAR}
          onChange={handleEditorChange}
          placeholder={NOTE_PLACEHOLDER.content}
          hideModeSwitch={true}
          usageStatistics={false}
          className="text-base font-normal leading-normal text-slate-400"
        />
      )}
    </>
  );
}
