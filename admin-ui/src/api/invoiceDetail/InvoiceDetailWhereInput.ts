import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";

export type InvoiceDetailWhereInput = {
  address?: AddressWhereUniqueInput;
  amount?: FloatNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  invoice?: InvoiceWhereUniqueInput;
  memo?: StringNullableFilter;
  roomNo?: StringNullableFilter;
};
