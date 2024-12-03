interface IKebabButtonProps {
  onClick: () => void;
}

export default function KebabButton({ onClick }: IKebabButtonProps) {
  return (
    <button
      className="relative flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 text-slate-400"
      onClick={onClick}
    >
      {/* 케밥 아이콘 부분 */}
    </button>
  );
}
