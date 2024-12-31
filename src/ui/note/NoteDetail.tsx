'use client';

import { useState, useEffect, useCallback } from 'react';
import { TNote } from '@model/note.model';
import NoteIframe from './NoteIframe';
import NoteViewer from './NoteViewer';

export default function NoteDetail({ noteContent, ...noteRest }: TNote) {
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
    setIframeSrc('');

    const embedUrl = convertToEmbedUrl(url);
    if (embedUrl) {
      setIframeSrc(embedUrl);
      return;
    }

    const iframeSupported = await checkIframeSupport(url);
    if (iframeSupported) {
      setIframeSrc(url);
    } else {
      window.open(url, '_blank');
    }
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) {
        return;
      }
      if (event.data && typeof event.data === 'string') {
        const url = event.data;
        handleLinkClick(url);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [handleLinkClick]);

  const transformContent = (content: string): string => {
    const regex = /<a href="(.*?)"[^>]*>(.*?)<\/a>/g;
    return content.replace(regex, (match, url, text) => {
      return `<button style="cursor: pointer;" onclick="window.postMessage('${url}', '*');">${text}</button>`;
    });
  };

  if (!noteContent) {
    return null;
  }

  return (
    // TODO 태블릿 이상 에서 헤더가 없어지면 수정 md:max-h-screen
    <div className="flex max-h-[calc(100vh-40px)] flex-col overflow-hidden bg-white md:flex-row">
      <NoteIframe iframeSrc={iframeSrc} />
      <NoteViewer
        {...noteRest}
        noteContent={transformContent(noteContent)}
        tripTitle={tripTitle}
      />
    </div>
  );
}
