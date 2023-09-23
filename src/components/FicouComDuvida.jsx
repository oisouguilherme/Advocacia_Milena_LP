import { IconBank } from "@/assets/Icons";
import Link from "next/link";

export function FicouComDuvida() {
  return (
    <div className="bg-[url('/bg.webp')] bg-no-repeat bg-cover">
      <div className="bg-black/80 py-24">
        <div className="max-w-md mx-auto text-center flex flex-col items-center text-white">
          <IconBank />
          <h2 className="text-3xl font-bold">Ficou alguma dúvida?</h2>
          <p className="py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            obcaecati.
          </p>
          <Link
            href={""}
            className="bg-black px-20 py-3 rounded-sm font-medium"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </div>
  );
}
