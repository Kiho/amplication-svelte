import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  customerName?: SortOrder;
  email?: SortOrder;
  phone?: SortOrder;
  addressId?: SortOrder;
};
