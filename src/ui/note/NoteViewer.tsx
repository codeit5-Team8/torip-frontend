interface INoteViewerProps {
  noteTitle: string;
  noteContent: string;
}

export default function NoteViewer({
  noteTitle,
  noteContent,
}: INoteViewerProps) {
  return (
    <div>
      <p>{noteTitle}</p>
      <div
        className="note-viewer"
        dangerouslySetInnerHTML={{
          __html: noteContent,
        }}
      />
    </div>
  );
}
