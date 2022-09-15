import { TradePartner } from "../../../backend/src/Types/TradePartner";

export interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof TradePartner) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}
  
export interface HeadCell {
  disablePadding: boolean;
  id: keyof TradePartner;
  label: string;
  numeric: boolean;
}

export type Order = 'asc' | 'desc';
