export default function NoteIframe({ iframeSrc }: { iframeSrc: string }) {
  return (
    <>
      {iframeSrc && (
        <iframe
          src={iframeSrc}
          title="Note Iframe"
          width="100%"
          height="100%"
          style={{ border: 'none', opacity: iframeSrc ? 1 : 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onError={() => {
            window.open(iframeSrc, '_blank');
          }}
        />
      )}
    </>
  );
}
