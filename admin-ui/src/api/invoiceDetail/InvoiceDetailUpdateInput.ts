import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";

export type InvoiceDetailUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  amount?: number | null;
  description?: string | null;
  invoice?: InvoiceWhereUniqueInput | null;
  memo?: string | null;
  roomNo?: string | null;
};
