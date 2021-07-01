import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type InvoiceUpdateInput = {
  totalAmount?: number | null;
  invoiceDate?: Date | null;
  discount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  invoiceNo?: string | null;
};
