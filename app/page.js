import HeadingLora from "@/components/headings/heading_lora";
import Image from "next/image";
import Rocket_1 from "@/public/assets/images/h/rocket_2.jpg";
import Rocket_2 from "@/public/assets/images/h/rocket.jpg";
import Sci from "@/public/assets/images/h/sci.jpg";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Github, Instagram } from "lucide-react";

export default function Home() {
  return (
    <section
      className={`min-h-screen flex items-center md:justify-center flex-col`}
    >
      <div className="p-10">
        <HeadingLora>
          <h2 className="text-2xl md:text-3xl text-neutral-300 max-w-80">
            Before you go in, just remember that space is huge and kinda weird,
            that what's make it fun.
          </h2>
        </HeadingLora>
        <div className="flex items-center justify-center md:items-stretch md:justify-center py-8 md:py-20">
          <div className="w-70 hidden md:block h-100 relative -rotate-25 z-1 md:translate-x-10 opacity-70 hover:opacity-100 transition-opacity">
            <Image
              src={Rocket_2}
              className="rounded-2xl object-cover"
              alt="SUPER COOL!"
              fill
            />
          </div>
          <div className="w-70 h-100 relative z-3 md:-translate-y-10">
            <Image
              src={Rocket_1}
              className="rounded-2xl object-cover"
              alt="SUPER COOL!"
              fill
            />
          </div>
          <div className="w-70 hidden md:block h-100 relative rotate-25 z-1 md:-translate-x-10 opacity-70 hover:opacity-100 transition-opacity">
            <Image
              src={Sci}
              className="rounded-2xl object-cover"
              alt="SUPER COOL!"
              fill
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href={"/"}
            className="bg-neutral-900 px-5 py-2.5 rounded-sm flex gap-1 items-center hover:bg-neutral-100 hover:text-neutral-950 transition-all"
          >
            Explore
            <ArrowUpRight size={19} />
          </Link>
        </div>
        {/* <section className="max-w-300 flex flex-col gap-5"></section>*/}
      </div>
      <footer
        className={`absolute md:right-10 bottom-10 text-neutral-400 text-sm flex flex-col leading-5`}
      >
        <p>By Marwaan.</p>
        <p>Peak performance & Peak security</p>
      </footer>
    </section>
  );
}
