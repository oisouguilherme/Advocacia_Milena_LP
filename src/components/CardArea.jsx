import Image from "next/image";

export function CardArea({ img }) {
  return (
    <div className="border-4 border-white p-2 sm:p-4 grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto rounded-lg">
      <div className="rounded-lg overflow-hidden md:w-96">
        <Image src={img} className="object-cover w-full h-64" />
      </div>
      <div className="text-start">
        <h3 className="text-2xl font-bold text-white pb-4">
          Contencioso Civel
        </h3>
        <ul className="space-y-1 text-lg px-4 list-disc">
          <li>Saude</li>
          <li>Saude Saude</li>
          <li>Saude</li>
          <li>Saude</li>
          <li>Saude Saude</li>
          <li>Saude</li>
        </ul>
      </div>
    </div>
  );
}
