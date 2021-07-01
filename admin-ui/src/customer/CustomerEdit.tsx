import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AddressTitle } from "../address/AddressTitle";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Customer Name" source="customerName" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Phone" source="phone" />
        <ReferenceInput source="address.id" reference="Address" label="Address">
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
