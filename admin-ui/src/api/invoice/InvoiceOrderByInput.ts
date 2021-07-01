import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  totalAmount?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  invoiceDate?: SortOrder;
  discount?: SortOrder;
  customerId?: SortOrder;
  invoiceNo?: SortOrder;
};
