import { IconBank } from "@/assets/Icons";
import Link from "next/link";

export function FicouComDuvida() {
  return (
    <div className="bg-[url('/im6.webp')] bg-center bg-no-repeat bg-cover">
      <div className="bg-white/60 py-32 px-4">
        <div className="max-w-md mx-auto text-center flex flex-col items-center">
          <IconBank />
          <h2 className="text-4xl font-bold">Ficou alguma dúvida?</h2>
          <p className="py-6 sm:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            obcaecati.
          </p>
          <Link
            href={""}
            className="bg-black w-full sm:w-80 py-3 rounded-sm font-bold text-white"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </div>
  );
}
