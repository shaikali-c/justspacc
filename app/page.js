import HeadingLora from "@/components/headings/heading_lora";

import HomeShowcase from "@/components/images_stuff/home_showcase";
import ForThose from "@/components/text_based/for_those";
import HomeFooter from "@/components/footers/home_footer";
import PrimaryButton from "@/components/buttons/primary";

export default function Home() {
  return (
    <section
      className={`min-h-screen flex items-center md:justify-center flex-col`}
    >
      <div className="p-10 md:pt-25 pb-0">
        <HeadingLora>
          <h2 className="text-2xl md:text-3xl text-neutral-300 md:max-w-100">
            Before you go in, just remember that space is huge and
            unpredictable, that's what makes exploring it so interesting.
          </h2>
        </HeadingLora>

        <HomeShowcase />
        <div className="flex justify-center">
          <PrimaryButton text={"Explore"} dest={"/explore"}></PrimaryButton>
        </div>
      </div>
      <ForThose />
      <HomeFooter />
    </section>
  );
}
