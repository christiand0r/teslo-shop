import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col-reverse flex-auto items-center justify-center gap-8 mx-auto p-6 max-w-5xl md:flex-row">
      <div>
        <h1 className="font-extrabold text-5xl md:text-8xl">
          Error 404
        </h1>
        <p className="text-base md:text-lg">
          Lo sentimos... no hemos encontrado lo que buscabas
        </p>

        <Link
          href="/"
          className="inline-block mt-8 px-6 py-2 rounded-full transition-colors bg-neutral-800 text-white hover:bg-black"
        >
          Volver al inicio
        </Link>
      </div>

      <Image
        src={"/sad-404.png"}
        alt="Carita triste por el error 404"
        height={240}
        width={240}
      />
    </div>
  );
}
