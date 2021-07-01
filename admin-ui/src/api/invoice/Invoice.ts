import { InvoiceDetail } from "../invoiceDetail/InvoiceDetail";
import { Customer } from "../customer/Customer";

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
