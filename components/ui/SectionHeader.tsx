interface Props {
  title: string;       // 한글 또는 영문 제목
  sub?: string;        // 상단 소제목 (영문 라벨)
}

export default function SectionHeader({ title, sub }: Props) {
  return (
    <div className="text-center mb-12">
      {sub && (
        <p
          className="font-sans text-[9px] tracking-[0.6em] uppercase mb-3"
          style={{ color: "#BBBBBB" }}
        >
          {sub}
        </p>
      )}
      <h2
        className="font-nanum text-[20px] font-normal tracking-[0.1em]"
        style={{ color: "#333333" }}
      >
        {title}
      </h2>
      <div
        className="mx-auto mt-4"
        style={{ width: 24, height: 1, backgroundColor: "#E0E0E0" }}
      />
    </div>
  );
}
