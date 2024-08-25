import { TesloTable, TesloTitle } from "@/components";
import { cn } from "@/utils";
import Link from "next/link";

const { Head, Body, Row, Column, Cell } = TesloTable;

export default function OrdersPage() {
  return (
    <div className="flex flex-col mx-auto py-10 max-w-5xl w-full flex-auto">
      <TesloTitle title="Ordenes" subtitle="Listado de ordenes realizadas" />

      <TesloTable>
        <Head>
          <Row header>
            <Column>#ID</Column>
            <Column>Nombre Completo</Column>
            <Column>Estado</Column>
            <Column></Column>
          </Row>
        </Head>
        <Body>
          <Row>
            <Cell label="#ID">1</Cell>
            <Cell label="Nombre Completo">Christian</Cell>
            <Cell label="Estado">
              <span
                className={cn(
                  "inline-block font-semibold text-xs text-center gap-2 px-3 py-1 leading-none rounded-full max-w-24 w-full text-white",
                  { "bg-emerald-800": true },
                  { "bg-amber-500": false }
                )}
              >
                Pagado
              </span>
            </Cell>
            <Cell action>
              <Link
                href={"/orders/uuid"}
                className="block underline-offset-4 hover:underline md:inline-block"
              >
                Ver orden
              </Link>
            </Cell>
          </Row>
          <Row>
            <Cell label="#ID">2</Cell>
            <Cell label="Nombre Completo">Christian</Cell>
            <Cell label="Estado">
              <span
                className={cn(
                  "inline-block font-semibold text-xs text-center gap-2 px-3 py-1 leading-none rounded-full max-w-24 w-full text-white",
                  { "bg-emerald-800": true },
                  { "bg-amber-500": false }
                )}
              >
                Pagado
              </span>
            </Cell>
            <Cell action>
              <Link
                href={"/orders/uuid"}
                className="block underline-offset-4 hover:underline md:inline-block"
              >
                Ver orden
              </Link>
            </Cell>
          </Row>
        </Body>
      </TesloTable>
    </div>
  );
}
