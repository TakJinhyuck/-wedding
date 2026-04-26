interface Props {
  title: string;
  sub?: string;
}

export default function SectionHeader({ title, sub }: Props) {
  return (
    <div className="text-center mb-10">
      {sub && (
        <p
          className="font-sans text-[9px] tracking-[0.6em] uppercase mb-3"
          style={{ color: "#BBBBBB" }}
        >
          {sub}
        </p>
      )}
      <h2
        className="font-nanum font-normal tracking-widest"
        style={{ fontSize: 20, color: "#333333" }}
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
