interface Props {
  kbd: string;
  command: string;
}

const Key = ({ kbd, command }: Props) => {
  return (
    <div className="flex gap-2 font-secondary text-sm items-center">
      <div className="flex items-center text-left font-bold text-lg font-mono px-3 py-1 border-2 border-slate-600 rounded shadow aspect-square w-fit">
        <span>{kbd}</span>
      </div>
      <div>{command}</div>
    </div>
  );
};

export default Key;
