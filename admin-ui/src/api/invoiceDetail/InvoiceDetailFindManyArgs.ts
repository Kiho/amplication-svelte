import { InvoiceDetailWhereInput } from "./InvoiceDetailWhereInput";
import { InvoiceDetailOrderByInput } from "./InvoiceDetailOrderByInput";

export type InvoiceDetailFindManyArgs = {
  where?: InvoiceDetailWhereInput;
  orderBy?: InvoiceDetailOrderByInput;
  skip?: number;
  take?: number;
};
