import Image from "next/image";

export function CardArea({ img, title, children }) {
  return (
    <div className="border-4 border-white p-2 sm:p-4 grid md:grid-cols-2 items-center max-w-4xl mx-auto rounded-lg h-fit" data-aos="zoom-in">
      <div className="rounded-lg overflow-hidden md:w-96">
        <Image src={img} className="object-cover w-full max-h-72" />
      </div>
      <div className="text-start">
        <h3 className="text-2xl font-bold text-white pb-4">
          {title}
        </h3>
        <ul className="space-y-1 px-4 list-disc">
          {children}
        </ul>
      </div>
    </div>
  );
}
