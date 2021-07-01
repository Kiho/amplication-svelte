import { InvoiceDetail as TInvoiceDetail } from "../api/invoiceDetail/InvoiceDetail";

export const INVOICEDETAIL_TITLE_FIELD = "roomNo";

export const InvoiceDetailTitle = (record: TInvoiceDetail) => {
  return record.roomNo;
};
