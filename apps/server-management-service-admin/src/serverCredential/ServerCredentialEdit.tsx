import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ServerCredentialEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="hostname" source="hostname" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="port" source="port" />
        <TextInput label="privateKey" multiline source="privateKey" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
