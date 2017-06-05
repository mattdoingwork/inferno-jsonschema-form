import Inferno from "inferno";

function BaseInput(props) {
  const {
    value,
    readonly,
    disabled,
    autofocus,
    onBlur,
    options,
    schema,
    formContext,
    registry,
    ...inputProps
  } = props;

  inputProps.type = options.inputType || inputProps.type || "text";
  const onInput = ({ target: { value } }) => {
    return props.onInput(value === "" ? options.emptyValue : value);
  };
  return (
    <input
      className="form-control"
      readOnly={readonly}
      disabled={disabled}
      autoFocus={autofocus}
      value={value == null ? "" : value}
      {...inputProps}
      onInput={onInput}
      onBlur={onBlur && (event => onBlur(inputProps.id, event.target.value))}
    />
  );
}

export default BaseInput;
