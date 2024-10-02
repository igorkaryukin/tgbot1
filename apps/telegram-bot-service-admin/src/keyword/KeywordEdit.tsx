import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const KeywordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="importance" source="importance" />
        <TextInput label="keyword" source="keyword" />
      </SimpleForm>
    </Edit>
  );
};
