import { Invoice as TInvoice } from "../api/invoice/Invoice";

export const INVOICE_TITLE_FIELD = "invoiceNo";

export const InvoiceTitle = (record: TInvoice) => {
  return record.invoiceNo;
};
