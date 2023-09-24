import { IconBank } from "@/assets/Icons";

export function CardConceitos() {
  return (
    <div className="bg-black text-white p-8 max-w-4xl rounded-lg flex flex-col md:flex-row gap-12 mx-auto -mt-20 relative">
      <div className="space-y-2">
        <div className="flex gap-2 text-xl font-bold items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            class="bi bi-check2-square"
            viewBox="0 0 16 16"
          >
            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
          </svg>
          <h3>Compromisso</h3>
        </div>
        <p className="text-xs">
          Comprometidos com a busca incansável pela justiça, defendemos os
          direitos com paixão e determinação.
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex gap-2 text-xl font-bold items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            class="bi bi-people"
            viewBox="0 0 16 16"
          >
            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
          </svg>
          <h3>Profissionalismo</h3>
        </div>
        <p className="text-xs">
          Nossa expertise e profissionalismo garantem serviços jurídicos de alta
          qualidade, baseados em conhecimento sólido e atualizado.
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex gap-2 text-xl font-bold items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            class="bi bi-currency-dollar"
            viewBox="0 0 16 16"
          >
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
          </svg>
          <h3>Foco e Resultados</h3>
        </div>
        <p className="text-xs">
          Colocamos nossos clientes em primeiro lugar, trabalhando
          incansavelmente para alcançar resultados positivos e satisfatórios.
        </p>
      </div>
    </div>
  );
}
