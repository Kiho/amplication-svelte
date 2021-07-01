import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";
import { InvoiceTitle } from "../invoice/InvoiceTitle";

export const InvoiceDetailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="address.id" reference="Address" label="Address">
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="invoice.id" reference="Invoice" label="Invoice">
          <SelectInput optionText={InvoiceTitle} />
        </ReferenceInput>
        <TextInput label="Memo" multiline source="memo" />
        <TextInput label="Room No" source="roomNo" />
      </SimpleForm>
    </Create>
  );
};
