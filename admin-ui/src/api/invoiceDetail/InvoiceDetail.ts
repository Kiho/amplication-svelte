import { Address } from "../address/Address";
import { Invoice } from "../invoice/Invoice";

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
