export default function SContainer({ title, children }) {
  return (
    <div className=" border-b border-neutral-900 pb-2">
      <p className="text-neutral-400 px-5 pt-5 pb-2 text-sm">{title}</p>
      {children}
    </div>
  );
}
