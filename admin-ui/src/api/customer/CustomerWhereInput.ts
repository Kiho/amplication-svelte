import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type CustomerWhereInput = {
  id?: StringFilter;
  customerName?: StringNullableFilter;
  email?: StringNullableFilter;
  phone?: StringNullableFilter;
  address?: AddressWhereUniqueInput;
};
