import MenuElem from "@/components/sidebar/menu_elem";
import SContainer from "@/components/sidebar/s_container";
import { ClockPlus, Heart, LibraryBig, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function Explore() {
  return (
    <main className="flex">
      <nav className="w-85 bg-black h-screen border-r border-neutral-900">
        <header className="text-center py-5 border-b border-neutral-900">
          <h2>JUSTSPACE</h2>
        </header>
        <SContainer title={"Menu"}>
          <MenuElem text={"Popular posts"}>
            <TrendingUp className="text-sky-600" size={18} />
          </MenuElem>
          <MenuElem text={"New posts"}>
            <ClockPlus size={18} className="text-green-500" />
          </MenuElem>
          <MenuElem text={"Favourite posts"}>
            <Heart size={18} className="text-pink-600" />
          </MenuElem>
        </SContainer>
        <SContainer title={"Researches"}>
          <MenuElem text={"Best of researches"}>
            <LibraryBig className="text-violet-500" size={18} />
          </MenuElem>
          <MenuElem text={"Create a research"}>
            <ClockPlus size={18} className="text-green-500" />
          </MenuElem>
          <MenuElem text={"Favourite researches"}>
            <Heart size={18} className="text-pink-600" />
          </MenuElem>
        </SContainer>
        <div className="w-full h-85 grid grid-cols-2 gap-2 p-2 border-b border-neutral-900">
          <div className="relative">
            <Image
              src={
                "https://cdn.esahubble.org/archives/images/screen/heic0601a.jpg"
              }
              className="object-cover rounded-md"
              alt="Super"
              fill
            />
          </div>
          <div className="relative">
            <Image
              src={
                "https://cdn.esahubble.org/archives/images/screen/heic2105a.jpg"
              }
              className="object-cover rounded-md"
              alt="Super"
              fill
            />
          </div>
          <div className="relative">
            <Image
              src={
                "https://cdn.esahubble.org/archives/images/screen/opo0010a.jpg"
              }
              className="object-cover rounded-md"
              alt="Super"
              fill
            />
          </div>
          <div className="relative">
            <Image
              src={
                "https://cdn.esahubble.org/archives/images/screen/potw1932a.jpg"
              }
              className="object-cover rounded-md"
              alt="Super"
              fill
            />
          </div>
        </div>
      </nav>
    </main>
  );
}
