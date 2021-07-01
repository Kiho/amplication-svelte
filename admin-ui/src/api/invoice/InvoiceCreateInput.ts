import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type InvoiceCreateInput = {
  totalAmount?: number | null;
  invoiceDate?: Date | null;
  discount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  invoiceNo?: string | null;
};
