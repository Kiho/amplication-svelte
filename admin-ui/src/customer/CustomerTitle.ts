import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "customerName";

export const CustomerTitle = (record: TCustomer) => {
  return record.customerName;
};
