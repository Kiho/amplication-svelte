import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";
import { InvoiceTitle } from "../invoice/InvoiceTitle";

export const InvoiceDetailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
