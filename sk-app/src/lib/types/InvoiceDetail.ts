import { Address } from "./Address";
import { Invoice } from "./Invoice";

export type InvoiceDetail = {
  address?: Address | null;
  amount: number | null;
  createdAt: Date;
  description: string | null;
  id: string;
  invoice?: Invoice | null;
  memo: string | null;
  roomNo: string | null;
  updatedAt: Date;
};
