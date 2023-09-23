export function Footer() {
  return (
    <div className="bg-[url('/bgBlack.jpg')] bg-top bg-no-repeat bg-cover">
      <div className="bg-black/80 text-white">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-12 items-start justify-around py-24 px-4">
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-4xl font-medium">LOGO</h2>
            <p className="text-sm">CNPJ: 1221212121-121</p>
          </div>
          <div className="flex flex-col gap-3 sm:w-80">
            <h2 className="font-bold">Localização</h2>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Officiis, placeat!
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold">Serviços</h2>
            <ul className="text-sm">
              <li>Tipo de Serviço</li>
              <li>Tipo de Serviço</li>
              <li>Tipo de Serviço</li>
              <li>Tipo de Serviço</li>
              <li>Tipo de Serviço</li>
            </ul>
          </div>
        </div>
        <div className="bg-black/80 text-violet-600 text-sm text-center py-1 font-bold">
          <p>Desenvolvido por DevMILITÃO 2023</p>
        </div>
      </div>
    </div>
  );
}