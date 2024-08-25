import Link from "next/link";

export const TesloFooter = () => {
  return (
    <footer className="text-xs text-center py-4">
      <Link href={"/"}>
        <span className="font-alternates font-semibold">Teslo</span> | Shop
      </Link>{" "}
      © 2024 ⋅ Privacidad & Legal ⋅ Ubicaciones
    </footer>
  );
};
