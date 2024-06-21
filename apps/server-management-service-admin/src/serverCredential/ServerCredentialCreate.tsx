import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ServerCredentialCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="hostname" source="hostname" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="port" source="port" />
        <TextInput label="privateKey" multiline source="privateKey" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
