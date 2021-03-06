import Inferno from "inferno";

import {
  getWidget,
  getUiOptions,
  optionsList,
  getDefaultRegistry,
} from "../../utils";

function StringField(props) {
  const {
    schema,
    name,
    uiSchema,
    idSchema,
    formData,
    required,
    disabled,
    readonly,
    autofocus,
    onInput,
    onBlur,
    registry = getDefaultRegistry(),
  } = props;
  const { title, format } = schema;
  const { widgets, formContext } = registry;
  const enumOptions = Array.isArray(schema.enum) && optionsList(schema);
  const defaultWidget = format || (enumOptions ? "select" : "text");
  const { widget = defaultWidget, placeholder = "", ...options } = getUiOptions(
    uiSchema
  );
  const Widget = getWidget(schema, widget, widgets);

  return (
    <Widget
      options={{ ...options, enumOptions }}
      schema={schema}
      id={idSchema && idSchema.$id}
      label={title === undefined ? name : title}
      value={formData}
      onInput={onInput}
      onBlur={onBlur}
      required={required}
      disabled={disabled}
      readonly={readonly}
      formContext={formContext}
      autofocus={autofocus}
      registry={registry}
      placeholder={placeholder}
    />
  );
}

StringField.defaultProps = {
  uiSchema: {},
  disabled: false,
  readonly: false,
  autofocus: false,
};

export default StringField;
