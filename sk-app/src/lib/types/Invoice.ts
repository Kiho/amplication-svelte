import { InvoiceDetail } from "./InvoiceDetail";
import { Customer } from "./Customer";

export type Invoice = {
  totalAmount: number | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  invoiceDate: Date | null;
  discount: number | null;
  invoiceDetails?: Array<InvoiceDetail>;
  customer?: Customer | null;
  invoiceNo: string | null;
};
