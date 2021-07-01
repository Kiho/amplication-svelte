import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";

export const InvoiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
