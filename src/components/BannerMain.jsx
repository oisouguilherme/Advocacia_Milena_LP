import Link from "next/link";
import ImageDireito from "../assets/im8.png";
import Image from "next/image";

export function BannerMain() {
  return (
    <div className="bg-[url('/bg.webp')] bg-no-repeat bg-cover">
      <div className="bg-black/30">
        <div className="max-w-6xl mx-auto pt-24 pb-32 grid grid-cols-2 items-center relative">
          <div className="space-y-8 w-[80%]">
            <h2 className="text-5xl font-medium">
              Lorem ipsum dolor sit amet.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              placeat sed nam voluptas at est qui vel? Quod cumque repellat
              labore id consectetur, porro esse praesentium aliquid delectus
              fuga quo.ceat sed nam voluptas at est qui vel? Quod cumque repellat
              labore id consectetur, porro esse praesentium aliquid delectus
              fuga quo.ceat sed nam voluptas at est qui vel? Quod cumque repellat
              labore id consectetur, porro esse praesentium aliquid delectus
              fuga quo.
            </p>
            <div className="flex gap-8">
              <Link className="bg-yellow-400 px-8 font-medium py-2" href={""}>
                Fale Conosco
              </Link>
              <Link
                className="border-2 border-yellow-400 px-8 font-medium py-2"
                href={""}
              >
                Area de Atuação
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center absolute bottom-0 right-5 z-0">
            <Image src={ImageDireito} width={450}/>
          </div>
        </div>
      </div>
    </div>
  );
}
