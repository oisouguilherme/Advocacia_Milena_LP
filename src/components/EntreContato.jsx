import { IconEmail, IconHora, IconTel, IconZap } from "@/assets/Icons";

export function EntreContato() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-6xl mx-auto py-24 text-center">
        <div className="max-w-md mx-auto space-y-3">
          <h2 className="text-3xl font-bold">Entre em Contato</h2>
          <p className="text-amber-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            alias placeat beatae quam sed quod!
          </p>
        </div>
        <div className="flex justify-between flex-wrap gap-4 pt-12">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-4 font-medium text-lg">
              <IconHora />
              <p>Horário de atendimento</p>
            </div>
            <p>Segunda a sexta 08:00 às 17:00 h</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-4 font-medium text-lg">
              <IconTel />
              <p>Telefone</p>
            </div>
            <p>Segunda a sexta 08:00 às 17:00 h</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-4 font-medium text-lg">
              <IconZap />
              <p>WhatsApp</p>
            </div>
            <p>Segunda a sexta 08:00 às 17:00 h</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-4 font-medium text-lg">
              <IconEmail />
              <p>E-mail</p>
            </div>
            <p>Segunda a sexta 08:00 às 17:00 h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
