import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FaqEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="answer" multiline source="answer" />
        <TextInput label="question" source="question" />
      </SimpleForm>
    </Edit>
  );
};
