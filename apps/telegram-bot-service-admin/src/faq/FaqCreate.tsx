import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FaqCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="answer" multiline source="answer" />
        <TextInput label="question" source="question" />
      </SimpleForm>
    </Create>
  );
};
