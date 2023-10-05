import { CardArea } from "./CardArea";

import Civil from "../assets/areas/civil.webp";
import Trabalhista from "../assets/areas/trabalhista.webp";
import Previdencia from "../assets/areas/previdencia.webp";
import Administrativo from "../assets/areas/administrativo.webp";
import Consumidor from "../assets/areas/consumidor.jpg";
import Imobiliario from "../assets/areas/imovel.webp";
import Tributario from "../assets/areas/tributario.webp";

export function AreasTrabalho() {
  return (
    <div id="AreaAtua" className="bg-azul text-bege">
      <div className="max-w-6xl mx-auto text-center py-24">
        <h2 className="text-3xl font-bold pb-2 px-4">Áreas de Atuação</h2>
        <p>
          Na Gonçalves & Cordeiro Guatimosim, somos apaixonados por justiça e{" "}
          <br /> dedicados a uma ampla gama de áreas legais.
        </p>
        <div className="space-y-8 pt-12 px-4">
          <CardArea img={Civil} title={"CONTENCIOSO CÍVEL"}>
            <li>
              Trabalhos jurídicos especializados em todos e quaisquer assuntos
              envolvendo o direito civil, tais como a elaboração e discussão
              envolvendo contratos, pareceres, usucapião, discussões envolvendo
              propriedade de bens móveis e imóveis, inventários, etc.
            </li>
          </CardArea>
          <CardArea img={Trabalhista} title={"CONTENCIOSO TRABALHISTA"}>
            <li>
              Assessoria a empresas e empregadores no que tange ao atendimento
              dos deveres trabalhistas de seus funcionários e colaboradores, bem
              como sua defesa em contenciosos judiciais envolvendo discussões
              empregados x empregador;
            </li>
            <li>
              Atuação em reclamações trabalhistas envolvendo direitos do
              trabalhador perante os empregadores em geral;
            </li>
            <li>
              Atuação em negociações envolvendo negociações e dissídios
              coletivos, etc.
            </li>
          </CardArea>
          <CardArea img={Previdencia} title={"CONTENCIOSO PREVIDENCIÁRIO "}>
            <li>
              Assessoria a empresas e empregadores no que tange ao atendimento
              dos deveres trabalhistas de seus funcionários e colaboradores, bem
              como sua defesa em contenciosos judiciais envolvendo discussões
              empregados x empregador;
            </li>
            <li>
              Atuação em reclamações trabalhistas envolvendo direitos do
              trabalhador perante os empregadores em geral;
            </li>
            <li>
              Atuação em negociações envolvendo negociações e dissídios
              coletivos, etc.
            </li>
          </CardArea>
          <CardArea
            img={Administrativo}
            title={"CONTENCIOSO E DIREITO ADMINISTRATIVO "}
          >
            <li>
              Atuação em defesa dos direitos de servidores públicos municipais,
              estaduais e federais, seja no âmbito administrativo ou judicial,
              em todo o amplo espectro que envolva sua atuação funcional, tais
              como: quinquênios, férias-prêmio, horas extras, adicionais e
              reajustes anuais não concedidos, etc;
            </li>
            <li>
              Defesas administrativas junto à Corregedorias ou Justiça,
              envolvendo imputação de ilícitos administrativos praticados, etc.
            </li>
          </CardArea>
          <CardArea
            img={Consumidor}
            title={"CONTENCIOSO E DIREITO DO CONSUMIDOR "}
          >
            <li>
              O Escritório está apto para assessorar e defender juridicamente
              nos órgãos administrativos ou judiciais onde se discutam o direito
              do consumidor x os direitos previstos no Código de Defesa do
              Consumidor, seja por parte do empresário ou do consumidor que de
              alguma forma precisar fazer valer seu direito;
            </li>
          </CardArea>
          <CardArea
            img={Imobiliario}
            title={"CONTENCIOSO E DIREITO IMOBILIARIO "}
          >
            <li>
              Assessoria em elaboração de contratos imobiliários de compra e
              venda e locação de imóveis, atuação em áreas envolvendo discussões
              de aluguéis, despejos, revisão de valores, etc.
            </li>
          </CardArea>
          <CardArea
            img={Tributario}
            title={"CONTENCIOSO E  DIREITO TRIBUTÁRIO "}
          >
            <li>
              Atuação ampla no espectro do direito tributário, seja no âmbito
              municipal (IPTU/ISS), sno àmbito estadual (ICMS/ITCMD/IPVA), ou no
              âmbito federal, envolvendo tributos como IR, Cofins, CSLL, IPI,
              etc. Elaboração de recursos administrativos ou judiciais
              envolvendo discussão de autos de infração à legislação tributária,
              seja nos tribunais administrativos ou judiciais. Atuação em
              requerimentos de isenção/imunidade de tributos, restituição de
              tributos, elaboração de consultas tributárias e busca de concessão
              de regimes especiais de tributação, etc.
            </li>
          </CardArea>
        </div>
      </div>
    </div>
  );
}
