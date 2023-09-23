import Image from "next/image";

export function CardArea({img}) {
  return (
    <div className="border-4 border-amber-500 p-4 grid grid-cols-2 gap-8 items-center max-w-4xl mx-auto rounded-lg">
      <div className="rounded-lg overflow-hidden w-96">
        <Image src={img} className="object-cover w-full h-64" />
      </div>
      <div className="text-start">
        <h3 className="text-2xl font-bold text-amber-400 pb-4">
          Contencioso Civel
        </h3>
        <ul className="list-disc space-y-3">
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
