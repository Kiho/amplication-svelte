import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type CustomerCreateInput = {
  customerName?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: AddressWhereUniqueInput | null;
};
