import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AddressTitle } from "../address/AddressTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Customer Name" source="customerName" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Phone" source="phone" />
        <ReferenceInput source="address.id" reference="Address" label="Address">
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
