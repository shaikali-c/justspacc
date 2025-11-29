import Blackhole from "@/public/assets/images/bh/blackhole.gif";
import Mars from "@/public/assets/images/mars/selfie.gif";
import Math from "@/public/assets/images/mars/math.jpg";
import MedaGIF from "@/public/assets/images/mars/perfect_2.gif";
import Meda from "@/public/assets/images/mars/meda.jpg";
import Cam from "@/public/assets/images/mars/cam.jpg";

import Image from "next/image";
import HeadingLora from "../headings/heading_lora";
import Link from "next/link";
import { Flame, Sparkles } from "lucide-react";

export default function ForThose() {
  return (
    <section className="border-t border-neutral-900 min-h-screen mt-10 flex justify-center w-full">
      <div className="p-7 flex flex-col gap-5 md:max-w-150 text-neutral-400">
        <HeadingLora>
          <h2 className="text-3xl text-neutral-100">
            For Those Who Think Space Is Just… Space
          </h2>
        </HeadingLora>
        <HeadingLora>
          <h2 className="text-xl text-neutral-200">Supermassive black holes</h2>
        </HeadingLora>
        <Image src={Blackhole} alt="A black hole" className="rounded-2xl" />
        <p>
          Almost every large galaxy, including our Milky Way, has a supermassive
          black hole at its center. These monster objects have hundreds of
          thousands to billions of times the Sun’s mass, although some
          scientists place the lower boundary at tens of thousands.
        </p>
        <p>
          Black holes are invisible to us unless they interact with something
          else. Some continuously eat gas and dust, and appear to glow brightly
          over time as matter falls in. But other black holes secretly lie in
          wait for years until a star comes close enough to snack on.
        </p>
        <HeadingLora>
          <h2 className="text-xl text-neutral-200">
            A triumph of physics, computation, and engineering
          </h2>
        </HeadingLora>
        <Image src={Mars} alt="A black hole" className="rounded-2xl" />
        <p>
          Perseverance is a highly advanced robotic rover built by NASA and
          landed on Mars in February 2021. It’s designed to, study Martian rocks
          and soil, search for ancient signs of microbial life, collect sample
          cores for later return to Earth and test technology for future human
          missions.
        </p>
        <Image src={Math} alt="A black hole" className="rounded-2xl" />

        <p>
          Perseverance uses a MMRTG, a Radioisotope Thermoelectric Generator. It
          converts heat from radioactive decay into electricity ~110 watts of
          electrical power. Works continuously, day and night, winter and dust
          storms No solar panels, so dust doesn’t shut it down.
        </p>
        <Image src={Meda} alt="A black hole" className="rounded-2xl" />
        <p>
          The Mars Environmental Dynamics Analyzer is known as MEDA. It makes
          weather measurements including wind speed and direction, temperature
          and humidity, and also measures the amount and size of dust particles
          in the Martian atmosphere.
        </p>
        <Image src={MedaGIF} alt="A black hole" className="rounded-2xl" />
        <p>
          It weights Approximately 12 pounds (5.5 kilograms) for all components.
          Sensors are located on the rover's mast "neck" and on the deck, front
          and interior of the rover's body.
        </p>
        <Image src={Cam} alt="A black hole" className="rounded-2xl" />
        <p>
          The SuperCam on the Perseverance rover examines rocks and soils with a
          camera, laser, and spectrometers to seek chemical materials that could
          be related to past life on Mars.
        </p>
        <p>
          It can identify the chemical and mineral makeup of areas on Mars as
          small as a pencil point, from a distance of more than 20 feet (7
          meters). This instrument also has a significant contribution from the
          Centre National d'Etudes Spatiales, Institut de Recherche en
          Astrophysique et Planétologie (CNES/IRAP) France.
        </p>

        <HeadingLora>
          <h2 className="text-xl text-neutral-200">
            At this point, you’re starting to see just how fascinating it really
            is.
          </h2>
        </HeadingLora>
        <div className="flex text-neutral-300">
          <Link
            href={"/"}
            className="w-full text-center bg-neutral-900 hover:bg-neutral-800 py-3.5 rounded-full rounded-r-none border-r border-r-neutral-700 flex gap-1.5 items-center justify-center"
          >
            <Flame size={17} className="text-orange-500" />
            Explore
          </Link>
          <Link
            href={"/"}
            className="w-full text-center bg-neutral-900 hover:bg-neutral-800 py-3.5 rounded-full rounded-l-none flex gap-2 items-center justify-center"
          >
            <Sparkles size={17} className="text-sky-600" />
            Recommend
          </Link>
        </div>
      </div>
    </section>
  );
}
