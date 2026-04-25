interface Props {
  title: string;
}

export default function SectionHeader({ title }: Props) {
  return (
    <div className="text-center mb-10">
      <h2 className="font-sans text-[10px] tracking-[0.55em] text-[#AAAAAA] uppercase font-normal">
        {title}
      </h2>
    </div>
  );
}
