'use client';

import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import NoteBackdrop from './NoteBackDrop';
import { AnimatePresence, motion } from 'framer-motion';
interface INoteDrawerProps {
  selectors: string;
}

export default function NoteDrawer({
  children,
  selectors,
}: PropsWithChildren<INoteDrawerProps>) {
  const element = document.querySelector(selectors);
  if (element === null) {
    throw new Error(
      'There are no elements in the react-portal-drawer that match the selector.',
    );
  }

  return ReactDOM.createPortal(
    <AnimatePresence initial={true} mode="wait">
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        exit={{
          x: -50,
          opacity: 0,
        }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
      >
        <div className="fixed z-[1] block h-screen w-screen overflow-auto sm:grid sm:grid-cols-[25%_75%]">
          <NoteBackdrop />
          {children}
        </div>
      </motion.div>
    </AnimatePresence>,
    element,
  );
}
