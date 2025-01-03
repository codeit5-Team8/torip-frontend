interface IPlusIconProps {
  size?: number; // SVG 크기
  className?: string; // Tailwind 클래스
}

export default function PlusIcon({ size = 16, className }: IPlusIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // Tailwind 상태 클래스 적용
    >
      <path
        d="M3.33301 8H12.333"
        stroke="currentColor" // 부모 텍스트 색상 상속
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7.83301 12.5L7.83301 3.5"
        stroke="currentColor" // 부모 텍스트 색상 상속
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
