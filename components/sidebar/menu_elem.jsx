export default function MenuElem({ text, dest, children }) {
  return (
    <p className="text-neutral-50 flex items-center gap-3 py-3.5 hover:bg-neutral-900 w-full pl-5 cursor-pointer">
      {children}
      {text}
    </p>
  );
}
