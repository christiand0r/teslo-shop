import {
  TableBody,
  TableCell,
  TableColumn,
  TableHead,
  TableProps,
  TableRow,
} from "@/interfaces";

const Cell = ({ label, action, children }: TableCell) => {
  return action ? (
    <td className="block text-center px-5 py-2 bg-gray-100 md:table-cell md:bg-transparent">
      {children}
    </td>
  ) : (
    <td
      data-label={label}
      className="block text-right relative border-b px-5 py-2 border-gray-200/70 after:font-semibold after:absolute after:left-5 after:content-[attr(data-label)] md:table-cell md:text-center md:border-b-0 md:after:content-none"
    >
      {children}
    </td>
  );
};

const Row = ({ children, header }: TableRow) => {
  return header ? (
    <tr className="bg-gray-200">{children}</tr>
  ) : (
    <tr className="block border mb-4 rounded-md border-gray-200/70 md:table-row md:mb-0 md:border-0 md:odd:border-b md:hover:bg-gray-100 ">
      {children}
    </tr>
  );
};

const Column = ({ children }: TableColumn) => {
  return <th className="text-center px-5 py-3">{children}</th>;
};

const Body = ({ children }: TableBody) => {
  return <tbody>{children}</tbody>;
};

const Head = ({ children }: TableHead) => {
  return (
    <thead className="absolute overflow-hidden p-0 border-0 -m-[1px] h-[1px] w-[1px] md:static md:m-0 md:h-auto md:w-auto">
      {children}
    </thead>
  );
};

export const TesloTable = ({ children }: Readonly<TableProps>) => {
  return <table>{children}</table>;
};

TesloTable.Cell = Cell;
TesloTable.Row = Row;
TesloTable.Column = Column;
TesloTable.Body = Body;
TesloTable.Head = Head;
