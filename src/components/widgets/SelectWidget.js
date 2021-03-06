import Inferno from "inferno";

import { asNumber } from "../../utils";

/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */
function processValue({ type, items }, value) {
  if (value === "") {
    return undefined;
  } else if (
    type === "array" &&
    items &&
    ["number", "integer"].includes(items.type)
  ) {
    return value.map(asNumber);
  } else if (type === "boolean") {
    return value === "true";
  } else if (type === "number") {
    return asNumber(value);
  }
  return value;
}

function getValue(event, multiple) {
  if (multiple) {
    return [].slice
      .call(event.target.options)
      .filter(o => o.selected)
      .map(o => o.value);
  } else {
    return event.target.value;
  }
}

function SelectWidget(props) {
  const {
    schema,
    id,
    options,
    value,
    required,
    disabled,
    readonly,
    multiple,
    autofocus,
    onInput,
    onBlur,
    placeholder,
  } = props;
  const { enumOptions } = options;
  const emptyValue = multiple ? [] : "";
  return (
    <select
      id={id}
      multiple={multiple}
      className="form-control"
      value={typeof value === "undefined" ? emptyValue : value}
      required={required}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      onBlur={
        onBlur &&
          (event => {
            const newValue = getValue(event, multiple);
            onBlur(id, processValue(schema, newValue));
          })
      }
      onInput={event => {
        const newValue = getValue(event, multiple);
        onInput(processValue(schema, newValue));
      }}>
      {!multiple && !schema.default && <option value="">{placeholder}</option>}
      {enumOptions.map(({ value, label }, i) => {
        return <option key={i} value={value}>{label}</option>;
      })}
    </select>
  );
}

SelectWidget.defaultProps = {
  autofocus: false,
};

export default SelectWidget;
