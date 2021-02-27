import React from "react";

import { Buurt } from "../contexts/BuurtenContext";
import { CrossAxisAlignment } from "../tokens/Alignment";
import { ErrorMessage } from "../tokens/ErrorMessage";
import { Orientation } from "../tokens/Orientation";
import FormField from "./FormField";
import InputText from "./InputText";
import List from "./List";
import ListItem from "./ListItem";
import PrimaryButton from "./PrimaryButton";
import Row from "./Row";
import SecundaryButton from "./SecundaryButton";
import Spacer from "./Spacer";
import Tag from "./Tag";

interface TagFormFields {
  tags: string[];
}

interface TagFormProps {
  buurt: Buurt;
  onSubmit: (formState: TagFormFields) => void;
}

const TagForm: React.FC<TagFormProps> = ({ buurt, onSubmit }) => {
  const [formState, setFormState] = React.useState<TagFormFields>({
    tags: buurt.tags,
  });
  const [inputTagState, setInputTagState] = React.useState<string>("");

  const [tagFieldError, setTagFieldError] = React.useState<
    undefined | "required" | "maxLength"
  >(undefined);

  const onRemoveTagClick = (
    event:
      | React.MouseEvent<HTMLSpanElement>
      | React.KeyboardEvent<HTMLSpanElement>,
    removedTag: string
  ) => {
    event.preventDefault();

    const newTags = formState.tags.reduce<string[]>(
      (tags: string[], tag: string) =>
        tag === removedTag ? [...tags] : [...tags, tag],
      []
    );

    const newFormState = { ...formState, tags: newTags };
    setFormState(newFormState);
  };

  const onAddTagClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      // Validation. Move to helper function in the future
      if (inputTagState === "") {
        setTagFieldError("required");
        return;
      }
      if (inputTagState.length > 128) {
        setTagFieldError("maxLength");
        return;
      }
      setTagFieldError(undefined);

      // Update newFormState
      const newTags = [...formState.tags];
      newTags.push(inputTagState);

      const newFormState = { ...formState, tags: newTags };
      setFormState(newFormState);
      setInputTagState("");
    },
    [formState, setFormState, inputTagState, setInputTagState]
  );

  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      // Form validation coulde ba added here. For example: max tags, no duplicate tags, etc.

      onSubmit(formState);
    },
    [formState, setFormState]
  );

  return (
    <React.Fragment>
      <List>
        {formState.tags.map((tag, index) => (
          <ListItem key={index}>
            <Tag
              withRemoveIcon={true}
              onClick={(event: React.MouseEvent<HTMLSpanElement>) =>
                onRemoveTagClick(event, tag)
              }
              onKeyUp={(event: React.KeyboardEvent<HTMLSpanElement>) => {
                if (event.code === "Enter") {
                  onRemoveTagClick(event, tag);
                }
              }}
            >
              {tag}
            </Tag>
          </ListItem>
        ))}
      </List>

      <form onSubmit={handleSubmit}>
        <FormField
          name="input-tag"
          label="Voer hier je tag in"
          errorMessage={tagFieldError && ErrorMessage[tagFieldError]}
          input={
            <Row crossAxisAlignment={CrossAxisAlignment.center}>
              <InputText
                value={inputTagState}
                onChange={(event) => setInputTagState(event.target.value)}
              />
              <Spacer orientation={Orientation.horizontal} size={10} />
              <SecundaryButton onClick={onAddTagClick}>
                Voeg tag toe
              </SecundaryButton>
            </Row>
          }
        ></FormField>
        <Spacer orientation={Orientation.vertical} size={15} />
        <PrimaryButton type="submit" value="Submit">
          Sla op
        </PrimaryButton>
      </form>
    </React.Fragment>
  );
};

export default TagForm;

export type { TagFormFields };
