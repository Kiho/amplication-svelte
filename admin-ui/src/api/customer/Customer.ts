import { Address } from "../address/Address";
import { Invoice } from "../invoice/Invoice";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  customerName: string | null;
  email: string | null;
  phone: string | null;
  address?: Address | null;
  invoices?: Array<Invoice>;
};
