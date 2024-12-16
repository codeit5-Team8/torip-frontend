'use client';

import { useState, useEffect, useCallback } from 'react';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { TNote } from '@model/note.model';

export default function NoteDetail({ noteContent }: TNote) {
  const [iframeSrc, setIframeSrc] = useState<string>('');

  const checkIframeSupport = async (url: string) => {
    try {
      const response = await fetch(`/api/proxy?url=${encodeURIComponent(url)}`);
      const { iframeAllowed } = await response.json();
      return iframeAllowed;
    } catch {
      return false;
    }
  };

  const convertToEmbedUrl = (url: string): string | null => {
    // YouTube `watch?v=` 링크 처리
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = new URL(url).searchParams.get('v');
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    // YouTube `youtu.be` 링크 처리
    if (url.includes('youtu.be')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    return null;
  };

  const handleLinkClick = useCallback(async (url: string) => {
    setIframeSrc(''); // Reset iframe

    const embedUrl = convertToEmbedUrl(url);
    if (embedUrl) {
      setIframeSrc(embedUrl);
      return;
    }

    const iframeSupported = await checkIframeSupport(url);
    if (iframeSupported) {
      setIframeSrc(url);
    } else {
      window.open(url, '_blank'); // 새 탭에서 열기
    }
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) {
        return;
      }
      if (event.data && typeof event.data === 'string') {
        handleLinkClick(event.data);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [handleLinkClick]);

  if (!noteContent) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 bg-white">
      <div className="h-full bg-rose-100">
        {iframeSrc && (
          <iframe
            src={iframeSrc}
            title="Note Iframe"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onError={() => {
              setIframeSrc('');
              window.open(iframeSrc, '_blank');
            }}
          />
        )}
      </div>
      <Viewer initialValue={noteContent} />
    </div>
  );
}
