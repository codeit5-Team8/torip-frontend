'use client';

import { useRouter } from 'next/navigation';

export default function NoteBackdrop() {
  const router = useRouter();

  return (
    <div
      role="button"
      tabIndex={0}
      className="hidden h-screen bg-black bg-opacity-50 sm:block"
      onClick={() => router.back()}
      onKeyDown={() => router.back()}
    />
  );
}
