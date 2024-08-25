export interface TableCell {
  label?: string;
  action?: boolean;
  children?: React.ReactNode;
}

export interface TableRow {
  header?: boolean;
  children: React.ReactNode;
}

export interface TableColumn {
  children?: React.ReactNode;
}

export interface TableBody {
  children?: React.ReactNode;
}

export interface TableHead {
  children: React.ReactNode;
}

export interface TableProps {
  children: React.ReactNode;
}
