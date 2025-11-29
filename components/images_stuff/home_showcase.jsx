import Image from "next/image";
import Rocket_2 from "@/public/assets/images/h/rocket.jpg";
import Sci from "@/public/assets/images/h/sci.jpg";

export default function HomeShowcase() {
  return (
    <div className="flex items-center justify-center md:items-stretch md:justify-center py-8 md:py-20">
      <div className="w-70 hidden md:block h-100 relative -rotate-25 z-1 md:translate-x-10 transa opacity-70 hover:opacity-100 transition-opacity">
        <Image
          src={Rocket_2}
          className="rounded-2xl object-cover"
          alt="SUPER COOL!"
          fill
        />
      </div>
      <div className="w-70 h-100 relative z-3 md:-translate-y-10">
        <Image
          src={"https://cdn.esahubble.org/archives/images/large/heic1516a.jpg"}
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
  );
}
