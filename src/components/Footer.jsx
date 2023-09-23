export function Footer() {
  return (
    <div className="bg-[url('/bg.webp')] bg-no-repeat bg-cover">
      <div className="bg-white/70">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-around py-12">
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-4xl font-medium">LOGO</h2>
            <p className="text-sm">CNPJ: 1221212121-121</p>
          </div>
          <div className="flex flex-col gap-3 max-w-sm">
            <h2 className="font-medium">Localização</h2>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Officiis, placeat!
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-medium">Serviços</h2>
            <ul className="text-sm">
              <li>Tipo de Serviço</li>
              <li>Tipo de Serviço</li>
              <li>Tipo de Serviço</li>
              <li>Tipo de Serviço</li>
              <li>Tipo de Serviço</li>
            </ul>
          </div>
        </div>
        <div className="bg-black text-violet-600 text-sm text-center py-1 font-medium">
          <p>Desenvolvido por DevMILITÃO 2023</p>
        </div>
      </div>
    </div>
  );
}
