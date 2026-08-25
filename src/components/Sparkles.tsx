import { useMemo } from "react";

interface SparklesProps {
  count?: number;
}

// Đây là "khung xương" vị trí siêu đẹp từ code CSS cũ của bạn
// Mình đã quy đổi hết về % của top và left cho dễ tính toán
const basePositions = [
  { top: 19, left: 9 }, // Hạt 1
  { top: 13, left: 48 }, // Hạt 2
  { top: 31, left: 92 }, // Hạt 3 (right: 8%)
  { top: 72, left: 5 }, // Hạt 4
  { top: 88, left: 43 }, // Hạt 5 (bottom: 12%)
  { top: 81, left: 91 }, // Hạt 6 (bottom: 19%)
  { top: 46, left: 49 }, // Hạt 7 (giữa tâm)
  { top: 8, left: 74 }, // Hạt 8
];

export default function Sparkles({ count = 8 }: SparklesProps) {
  const randomSparkles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // Lấy vị trí từ khung xương (nếu truyền count > 8 thì quay vòng lại mảng)
      const base = basePositions[i % basePositions.length];

      // Tạo độ lệch ngẫu nhiên từ -6% đến +6% so với vị trí gốc
      const jitterTop = Math.floor(Math.random() * 12) - 6;
      const jitterLeft = Math.floor(Math.random() * 12) - 6;

      // Cộng độ lệch vào vị trí gốc (dùng min/max để không bị văng ra khỏi màn hình)
      const finalTop = Math.max(2, Math.min(98, base.top + jitterTop));
      const finalLeft = Math.max(2, Math.min(98, base.left + jitterLeft));

      // Hạt 7, 8 trong code cũ của bạn là 3px, mình giữ nguyên logic đó hoặc random
      const isSmall = i === 6 || i === 7 || Math.random() > 0.7;
      const size = isSmall ? "3px" : "5px";

      return {
        top: `${finalTop}%`,
        left: `${finalLeft}%`,
        width: size,
        height: size,
        animationDelay: `-${(Math.random() * 3).toFixed(2)}s`, // Chớp tắt random
      };
    });
  }, [count]);

  return (
    <div className="sparkles" aria-hidden="true">
      {randomSparkles.map((style, index) => (
        <i key={index} style={style} />
      ))}
    </div>
  );
}
