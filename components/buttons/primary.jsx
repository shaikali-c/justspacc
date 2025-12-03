import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function PrimaryButton({ text, dest }) {
  return (
    <Link
      href={dest}
      className="bg-neutral-900 px-5 py-2.5 rounded-sm flex gap-1 items-center hover:bg-neutral-100 hover:text-neutral-950 transition-all"
    >
      {text}
      <ArrowUpRight size={19} />
    </Link>
  );
}
