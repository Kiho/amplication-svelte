import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ListProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ADDRESS_TITLE_FIELD } from "./AddressTitle";
import { INVOICE_TITLE_FIELD } from "../invoice/InvoiceTitle";

export const AddressShow = (props: ListProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Address 1" source="address_1" />
        <TextField label="Address 2" source="address_2" />
        <TextField label="City" source="city" />
        <TextField label="State" source="state" />
        <TextField label="Zip" source="zip" />
        <ReferenceManyField
          reference="Customer"
          target="AddressId"
          label="Customers"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Customer Name" source="customerName" />
            <TextField label="Email" source="email" />
            <TextField label="Phone" source="phone" />
            <ReferenceField
              label="Address"
              source="address.id"
              reference="Address"
            >
              <TextField source={ADDRESS_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="InvoiceDetail"
          target="AddressId"
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
