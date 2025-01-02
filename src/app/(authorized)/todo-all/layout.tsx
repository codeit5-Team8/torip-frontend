export default function TodoAllLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full max-w-[988px] flex-1 flex-col">
      {children}
    </div>
  );
}
