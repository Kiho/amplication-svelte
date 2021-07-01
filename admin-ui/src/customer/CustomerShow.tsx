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

import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";

export const CustomerShow = (props: ListProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Customer Name" source="customerName" />
        <TextField label="Email" source="email" />
        <TextField label="Phone" source="phone" />
        <ReferenceField label="Address" source="address.id" reference="Address">
          <TextField source={ADDRESS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Invoice"
          target="CustomerId"
          label="Invoices"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
