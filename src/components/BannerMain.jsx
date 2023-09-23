import Link from "next/link";

export function BannerMain() {
  return (
    <div className="bg-[url('/im4.webp')] bg-top bg-no-repeat bg-cover">
      <div className="bg-white/70">
        <div className="max-w-6xl mx-auto pt-32 px-4 pb-44 grid md:grid-cols-2 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold">
              Escritório de Advocacia em Belo Horizonte/MG
            </h2>
            <p className="sm:w-[90%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              placeat sed nam voluptas at est qui vel? Quod cumque repellat
              labore id consectetur, porro esse praesentium aliquid delectus
              fuga quo.ceat sed nam voluptas at est qui vel? Quod cumque repellat
              labore id consectetur, porro esse praesentium aliquid delectus
              fuga quo.ceat sed nam voluptas at est qui vel? Quod cumque repellat
              labore id consectetur, porro esse praesentium aliquid delectus
              fuga quo.
            </p>
            <div className="flex flex-wrap gap-8 text-lg">
              <Link className="bg-black text-white w-56 text-center py-3 rounded-lg font-bold" href={""}>
                Fale Conosco
              </Link>
              <Link
                className="border-2 bg-white/80 border-black text-black w-56 text-center py-3 rounded-lg font-bold"
                href={""}
              >
                Área de Atuação
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
