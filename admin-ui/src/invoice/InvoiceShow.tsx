import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { INVOICE_TITLE_FIELD } from "./InvoiceTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const InvoiceShow = (props: ListProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Total Amount" source="totalAmount" />
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Invoice Date" source="invoiceDate" />
        <TextField label="Discount" source="discount" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Invoice No" source="invoiceNo" />
        <ReferenceManyField
          reference="InvoiceDetail"
          target="InvoiceId"
          label="Invoice Details"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Address"
              source="address.id"
              reference="Address"
            >
              <TextField source={ADDRESS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Invoice"
              source="invoice.id"
              reference="Invoice"
            >
              <TextField source={INVOICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Memo" source="memo" />
            <TextField label="Room No" source="roomNo" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
