import Image from "next/image";
import Link from "next/link";
import Foto from "../assets/im1.webp";
import { IconZap } from "@/assets/Icons";
export function SobreEscritorio() {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12 md:gap-32 px-4 py-24">
      <div className="flex flex-col gap-4 md:w-[80%] items-center md:items-start ">
        <h2 className="text-3xl font-bold">Sobre o escritório</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iste vel
          fugit adipisci modi, nobis ducimus et quibusdam corrupti magnam!vel
          fugit adipisci modi, nobis ducimus et quibusdam corrupti magnam!vel
          fugit adipisci modi, nobis ducimus et quibusdam corrupti magnam!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iste
          vevel fugit adipisci modi, nobis ducimus et quibusdam corrupti
          magnam!vel fugit adipisci modi, nobis ducimus et quibusdam corrupti
          magnam!l fugit adipisci modi, nobis ducimus et quibusdam corrupti
          magnam!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iste
          vvel fugit adipisci modi, nobis ducimus et quibusdam corrupti
          magnam!vel fugit adipisci modi, nobis ducimus et quibusdam corrupti
          magnam!el fugit adipisci modi, nobis ducimus et quibusdam corrupti
          magnam!
        </p>

        <Link
          href={""}
          className="bg-black text-white w-full md:w-80 justify-center font-bold rounded-sm py-3 flex items-center gap-2 mt-4"
        >
          <IconZap/>
          Fale Conosco
        </Link>
      </div>
      <Image src={Foto} className="rounded-3xl h-full object-cover md:w-[80%]" />
    </div>
  );
}
