import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";

export const InvoiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Total Amount" source="totalAmount" />
        <DateInput label="Invoice Date" source="invoiceDate" />
        <NumberInput label="Discount" source="discount" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <TextInput label="Invoice No" source="invoiceNo" />
      </SimpleForm>
    </Create>
  );
};
