import Image from "next/image";
import ImageAdv from "../assets/adv.jpg";

export function NossaEquipe() {
  return (
    <div className="bg-white/60 px-4">
      <div className="max-w-6xl mx-auto pb-32">
        <div className="text-center font-bold text-lg">
          <h2 className="text-4xl">Conheça nossa equipe</h2>
          <p>Nossos Advogados</p>
        </div>
        <div className="flex justify-around gap-8 flex-wrap pt-12">
          <div className="relative group w-80 cursor-pointer" data-aos="zoom-out">
            <Image
              src={ImageAdv}
              alt="Milena Gonçalvez de Oliveira"
              className="object-cover object-top h-80"
            />

            <div className="text-center py-2 text-lg absolute bottom-0 bg-black/90 w-full text-white">
              <p className=" font-bold">Milena Gonçalvez</p>
              <p className="text-sm">Advogada Trabalhista</p>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 flex gap-4 flex-col justify-start items-start text-white transition-opacity p-4">
              <p className="font-bold text-lg">Milena Gonçalvez de Oliveira</p>
              <p className="">
                Advogada, formada pela Universidade FUMEC de Belo Horizonte-MG,
                especialista em questões envolvendo direito trabalhista,
                previdenciário e tributário.
              </p>
            </div>
          </div>
          <div className="relative group w-80 cursor-pointer" data-aos="zoom-out">
            <Image
              src={ImageAdv}
              alt="Paula Soares Cordeiro Guatimosim"
              className="object-cover object-top h-80"
            />

            <div className="text-center py-2 text-lg absolute bottom-0 bg-black/90 w-full text-white">
              <p className=" font-bold">Paula Soares</p>
              <p className="text-sm">Advogada</p>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 flex gap-4 flex-col justify-start items-start text-white transition-opacity p-4">
              <p className="font-bold  text-lg">
                Paula Soares Cordeiro Guatimosim
              </p>
              <p className="">
                Advogada, formada pela Universidade FUMEC de Belo Horizonte-MG,
                especialista em questões envolvendo......................
              </p>
            </div>
          </div>
          <div className="relative group w-80 cursor-pointer" data-aos="zoom-out">
            <Image
              src={ImageAdv}
              alt="Marcus Vinícius Bolpato da Silva"
              className="object-cover object-top h-80"
            />

            <div className="text-center py-2 text-lg absolute bottom-0 bg-black/90 w-full text-white">
              <p className=" font-bold">Marcus Vinícius</p>
              <p className="text-sm">Especialista em Direito Tributário</p>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 flex gap-4 flex-col justify-start items-start text-white transition-opacity p-4">
              <p className="font-bold text-lg">
                Marcus Vinícius Bolpato da Silva
              </p>
              <p className="text-sm">
                Bacharel em direito pela Faculdade de Juiz de Fora. Especialista
                em Direito Tributário pela PUC/MG. Ex-servidor do fisco de MG,
                tendo ocupado por 35 anos o cargo de Gestor do Grupo de
                Tributação, Fiscalização e Arrecadação do Estado de MG, onde
                exerceu diversas atividades em Posto de Fiscalização, na
                Corregedoria da Fazenda, já foi Presidente das entidades
                SINFAZFISCO-MG e da FEBRAFISCO. Atualmente é aposentado e se
                dedica à defesa dos direitos dos servidores e daqueles cujo
                direitos são vilipendiados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
