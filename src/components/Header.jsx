import Image from "next/image";
import Logo from "../assets/lgAzul.png";

import { useState } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="Nav" className="z-50 py-4 px-4 bg-white/90">
      <div className="max-w-6xl mx-auto flex justify-between gap-4 items-center">
        <div className="cursor-pointer w-64 sm:w-80">
          <a href="/">
            <Image src={Logo} alt="Logo Goistore" />
          </a>
        </div>
        <div className="lg:hidden">
          <div
            className={`fixed top-0 left-0 right-0 bottom-0 z-30 bg-black opacity-50 ${
              isOpen ? "block" : "hidden"
            }`}
            onClick={toggleMenu}
          ></div>
          <div
            className={`fixed top-0 right-0 bottom-0 bg-black/90 z-40 w-64 transform transition-transform ease-in-out duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="p-8 space-y-4 text-2xl">
              <li className="cursor-pointer text-[#f0f0f0] duration-300">
                <a href="/">Página Inicial</a>
              </li>
              <li className="cursor-pointer text-[#f0f0f0] duration-300">
                <Link to="SobreNos" spy={true} smooth={true}>
                  Sobre Nós
                </Link>
              </li>
              <li className="cursor-pointer text-[#f0f0f0] duration-300">
                <Link to="AreaAtua" spy={true} smooth={true}>
                  Áreas de Atuação
                </Link>
              </li>
              <li className="cursor-pointer text-[#f0f0f0] duration-300">
                <Link to="Loc" spy={true} smooth={true}>
                  Localização
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block">
          <ul className="flex space-x-12 font-bold text-center items-center text-lg">
            <li className="cursor-pointer text-azul duration-300">
              <a href="/">Página Inicial</a>
            </li>
            <li className="cursor-pointer text-azul duration-300">
              <Link to="SobreNos" spy={true} smooth={true}>
                Sobre Nós
              </Link>
            </li>
            <li className="cursor-pointer text-azul duration-300">
              <Link to="AreaAtua" spy={true} smooth={true}>
                Áreas de Atuação
              </Link>
            </li>
            <li className="cursor-pointer text-azul duration-300">
              <Link to="Loc" spy={true} smooth={true}>
                Localização
              </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger lg:hidden" onClick={toggleMenu}>
          <span className="block w-6 h-1 bg-black mb-1"></span>
          <span className="block w-6 h-1 bg-black mb-1"></span>
          <span className="block w-6 h-1 bg-black"></span>
        </div>
      </div>
    </section>
  );
}
