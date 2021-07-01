import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AddressWhereInput = {
  id?: StringFilter;
  address_1?: StringNullableFilter;
  address_2?: StringNullableFilter;
  city?: StringNullableFilter;
  state?: StringNullableFilter;
  zip?: StringNullableFilter;
};
