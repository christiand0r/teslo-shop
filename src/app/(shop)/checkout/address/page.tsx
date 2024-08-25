import Link from "next/link";

export default function AddressPage() {
  return (
    <div className="flex flex-col mx-auto py-10 max-w-5xl w-full flex-auto">
      <h1 className="font-alternates font-bold text-4xl">Dirección</h1>
      <p className="text-sm">
        Los datos que usaremos para enviar los productos que compres
      </p>

      <form className="my-4 max-w-3xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="firstname"
              className="font-semibold text-xs uppercase"
            >
              Nombre
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              autoComplete="new-firstname"
              className="p-2 border rounded-lg transition-colors bg-gray-200/70 border-gray-200/70 focus:outline-none focus-within:border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="lastname"
              className="font-semibold text-xs uppercase"
            >
              Apellido
            </label>
            <input
              type="text"
              id="lastname"
              name="firstname"
              autoComplete="new-lastname"
              className="p-2 border rounded-lg transition-colors bg-gray-200/70 border-gray-200/70 focus:outline-none focus-within:border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-semibold text-xs uppercase">
              Telefono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="new-phone"
              className="p-2 border rounded-lg transition-colors bg-gray-200/70 border-gray-200/70 focus:outline-none focus-within:border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="main-address"
              className="font-semibold text-xs uppercase"
            >
              Dirección
            </label>
            <input
              type="text"
              id="main-address"
              name="main-address"
              autoComplete="new-main-address"
              className="p-2 border rounded-lg transition-colors bg-gray-200/70 border-gray-200/70 focus:outline-none focus-within:border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="second-address"
              className="font-semibold text-xs uppercase"
            >
              Dirección 2 (Opcional)
            </label>
            <input
              type="text"
              id="second-address"
              name="second-address"
              autoComplete="new-second-address"
              className="p-2 border rounded-lg transition-colors bg-gray-200/70 border-gray-200/70 focus:outline-none focus-within:border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="country"
              className="font-semibold text-xs uppercase"
            >
              País
            </label>
            <select
              id="country"
              name="country"
              defaultValue={""}
              autoComplete="new-country"
              className="p-2 border rounded-lg transition-colors bg-gray-200/70 border-gray-200/70 focus:outline-none focus-within:border-gray-300"
            >
              <option value="" disabled hidden>
                Seleccione un país
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="city" className="font-semibold text-xs uppercase">
              Ciudad
            </label>
            <input
              type="text"
              id="city"
              name="city"
              autoComplete="new-city"
              className="p-2 border rounded-lg transition-colors bg-gray-200/70 border-gray-200/70 focus:outline-none focus-within:border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="zip" className="font-semibold text-xs uppercase">
              Código Postal
            </label>
            <input
              type="number"
              id="zip"
              name="zip"
              autoComplete="new-zip"
              className="p-2 border rounded-lg transition-colors bg-gray-200/70 border-gray-200/70 focus:outline-none focus-within:border-gray-300"
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-6 mt-6">
          <button
            type="submit"
            className="inline-block font-semibold px-6 py-2 rounded-full transition-colors bg-neutral-800 text-white hover:bg-black"
          >
            Guardar
          </button>
          <Link href={"/cart"} className="text-sm underline underline-offset-4">
            Ver carrito
          </Link>
        </div>
      </form>
    </div>
  );
}
