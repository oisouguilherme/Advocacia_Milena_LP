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
              <li>Cível</li>
              <li>Trabalhista</li>
              <li>Previdenciário</li>
              <li>Direiro Administrativo</li>
              <li>Direiro do Consumidor</li>
              <li>Direiro Imobiliario</li>
              <li>Direiro Tributário</li>
            </ul>
          </div>
        </div>
        <div className="bg-black/10 text-violet-600 text-xs text-center pb-1 font-bold font-sans">
          <a href="https://guilherme-portfolio-frontend.netlify.app/" target="_blank">Desenvolvido por DevMILITÃO 2023</a>
        </div>
      </div>
    </div>
  );
}
