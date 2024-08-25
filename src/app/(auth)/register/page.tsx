import Link from "next/link";
import { TesloField } from "@/components";

export default function RegisterPage() {
  return (
    <main className="max-w-lg w-full">
      <form className="px-10 py-20 border rounded-lg bg-white border-gray-200/70">
        <legend className="font-semibold text-2xl text-center mb-6">
          Crear cuenta
        </legend>

        <div className="flex flex-col gap-4">
          <TesloField label="Nombre y apellido" type="text" />
          <TesloField label="Correo electrónico" type="text" />
          <TesloField label="Contraseña" type="password" />

          <button
            type="submit"
            className="inline-block flex-auto px-6 py-2 rounded-full truncate transition-colors bg-neutral-800 text-white hover:bg-black"
          >
            Registrarse
          </button>
        </div>
      </form>

      <div className="flex items-center justify-center gap-4 my-6 w-full">
        <span className="flex-1 border-t border-gray-200"></span>
        <span className="px-2">o</span>
        <span className="flex-1 border-t border-gray-200"></span>
      </div>

      <div className="flex flex-col justify-center gap-4 px-10 w-full">
        <Link
          href="/login"
          className="text-center px-6 py-2 rounded-full transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300"
        >
          Iniciar sesión
        </Link>
      </div>
    </main>
  );
}
