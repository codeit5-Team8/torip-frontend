import { useRouter } from 'next/navigation';
import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

interface INoteDrawerProps {
  selectors: string;
}

export default function NoteDrawer({
  children,
  selectors,
}: PropsWithChildren<INoteDrawerProps>) {
  const router = useRouter();
  const element = document.querySelector(selectors);
  if (element === null) {
    throw new Error(
      'There are no elements in the react-portal-drawer that match the selector.',
    );
  }

  return ReactDOM.createPortal(
    <div className="fixed z-[1] grid h-screen w-screen grid-cols-2 overflow-auto">
      <Backdrop onClick={router.back} />
      {children}
    </div>,
    element,
  );
}

function Backdrop({ onClick }: { onClick?: () => void }) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="h-screen bg-black bg-opacity-50"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && onClick) {
          onClick();
        }
      }}
    />
  );
}
