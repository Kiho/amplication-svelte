import { Customer } from "../customer/Customer";
import { InvoiceDetail } from "../invoiceDetail/InvoiceDetail";

export type Address = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  customers?: Array<Customer>;
  invoiceDetails?: Array<InvoiceDetail>;
};
