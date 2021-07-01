import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { INVOICE_TITLE_FIELD } from "../invoice/InvoiceTitle";

export const InvoiceDetailList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Invoice Details"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Address" source="address.id" reference="Address">
          <TextField source={ADDRESS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Invoice" source="invoice.id" reference="Invoice">
          <TextField source={INVOICE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Memo" source="memo" />
        <TextField label="Room No" source="roomNo" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
