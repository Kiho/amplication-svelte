import { InvoiceWhereInput } from "./InvoiceWhereInput";
import { InvoiceOrderByInput } from "./InvoiceOrderByInput";

export type InvoiceFindManyArgs = {
  where?: InvoiceWhereInput;
  orderBy?: InvoiceOrderByInput;
  skip?: number;
  take?: number;
};
