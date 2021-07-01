import { SortOrder } from "../../util/SortOrder";

export type InvoiceDetailOrderByInput = {
  addressId?: SortOrder;
  amount?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  invoiceId?: SortOrder;
  memo?: SortOrder;
  roomNo?: SortOrder;
  updatedAt?: SortOrder;
};
