import { IconEmail, IconHora, IconTel, IconZap } from "@/assets/Icons";

export function EntreContato() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-6xl mx-auto py-32 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-4xl font-bold">Entre em Contato</h2>
          <p className="sm:text-lg">
            Não hesite em nos contatar. Estamos aqui para ouvir você e oferecer
            orientação legal especializada. Sua jornada em busca da justiça
            começa com um simples contato.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-around gap-4 pt-16 px-8">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-4 font-medium text-lg">
              <IconHora />
              <p className="font-bold">Horário de atendimento</p>
            </div>
            <p>Segunda a sexta 08:00 às 17:00 h</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-4 font-medium text-lg">
              <IconTel />
              <p className="font-bold">Telefone</p>
            </div>
            <p>(38) 99855-5555</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-4 font-medium text-lg">
              <IconZap />
              <p className="font-bold">WhatsApp</p>
            </div>
            <p>(38) 99855-5555</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-4 font-medium text-lg">
              <IconEmail />
              <p className="font-bold">E-mail</p>
            </div>
            <p>advogado@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
