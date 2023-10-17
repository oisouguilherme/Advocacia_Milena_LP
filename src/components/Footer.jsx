import Image from "next/image";
import Logo from "../assets/logoFooter.png";
export function Footer() {
  return (
    <div className="bg-[url('/bgBlack.jpg')] bg-top bg-no-repeat bg-cover">
      <div className="bg-black/80 text-white">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-12 items-start justify-around py-24 px-4">
          <div className="flex flex-col items-center gap-3">
            <Image src={Logo} className="w-64" />
            {/* <p className="text-sm">CNPJ: 1221212121-121</p> */}
          </div>
          <div className="flex flex-col gap-3 sm:w-80">
            <h2 className="font-bold">Localização</h2>
            <p className="text-sm">
              R. Vereda, 50, sala 504, Vila da Serra. <br /> Nova Lima-MG,
              34006-077
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold">Serviços</h2>
            <ul className="text-sm">
              <li>Direito Civil</li>
              <li>Direito Trabalhista</li>
              <li>Direito Previdenciário</li>
              <li>Direito Administrativo</li>
              <li>Direito do Consumidor</li>
              <li>Direito Imobiliário</li>
              <li>Direito Tributário</li>
            </ul>
          </div>
        </div>
        <div className="bg-black/10 text-violet-600 text-xs text-center pb-1 font-bold font-sans">
          <a
            href="https://guilherme-portfolio-frontend.netlify.app/"
            target="_blank"
          >
            Desenvolvido por DevMILITÃO 2023
          </a>
        </div>
      </div>
    </div>
  );
}
