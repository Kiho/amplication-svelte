import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InvoiceWhereInput = {
  totalAmount?: FloatNullableFilter;
  id?: StringFilter;
  invoiceDate?: DateTimeNullableFilter;
  customer?: CustomerWhereUniqueInput;
  invoiceNo?: StringNullableFilter;
};
