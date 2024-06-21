import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ServerCredentialList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ServerCredentials"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="hostname" source="hostname" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="port" source="port" />
        <TextField label="privateKey" source="privateKey" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
      </Datagrid>
    </List>
  );
};
