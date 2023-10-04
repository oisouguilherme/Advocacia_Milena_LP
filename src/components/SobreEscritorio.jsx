import Image from "next/image";
import Link from "next/link";
import Foto from "../assets/sobreEscritorio.jpg";

import { IconZap } from "@/assets/Icons";
export function SobreEscritorio() {
  return (
    <div id="SobreNos" className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12 md:gap-32 px-4 py-24">
      <div className="flex flex-col gap-2 md:w-[80%] items-center md:items-start" data-aos="fade-down">
        <h2 className="text-3xl font-bold">Sobre o escritório</h2>
        <p>
          O Escritório Gonçalves & Cordeiro Guatimosim, é um escritório de
          advocacia especializado, com sede na Capital de MG, e com atuação em
          todo território nacional.
        </p>
        <p>
          Trazemos em nosso modo de trabalhar a luta incansável pelo direito e
          pela justiça, abraçando as causas de nossos clientes, como se nossas
          mesmas fossem, jamais abandonando-as, ainda que o direito vindicato
          possa parecer distante e inatingível.
        </p>
        <p>
          Trabalhando com ética, dedicação, competência e capacidade técnica, os
          profissionais do Escritório estão aptos e prontos para atender suas
          demandas e defender seu direito perante quaisquer fóruns e Tribunais,
          judiciais ou administrativos do País.
        </p>

        <Link
          href={""}
          className="bg-black hover:bg-black/80 duration-300 text-white w-full md:w-80 justify-center font-bold rounded-sm py-3 flex items-center gap-2 mt-4"
        >
          <IconZap />
          Fale Conosco
        </Link>
      </div>
      <Image
        src={Foto}
        className="rounded-3xl h-full object-cover md:w-[80%]"
        data-aos="fade-up"
      />
    </div>
  );
}
