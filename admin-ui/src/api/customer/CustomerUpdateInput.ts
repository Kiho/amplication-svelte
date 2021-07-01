import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type CustomerUpdateInput = {
  customerName?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: AddressWhereUniqueInput | null;
};
