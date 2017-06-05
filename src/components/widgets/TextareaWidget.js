import Inferno from "inferno";

function TextareaWidget(props) {
  const {
    id,
    options,
    placeholder,
    value,
    required,
    disabled,
    readonly,
    autofocus,
    onInput,
    onBlur,
  } = props;
  const _onInput = ({ target: { value } }) => {
    return onInput(value === "" ? options.emptyValue : value);
  };
  return (
    <textarea
      id={id}
      className="form-control"
      value={typeof value === "undefined" ? "" : value}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      readOnly={readonly}
      autoFocus={autofocus}
      rows={options.rows}
      onBlur={onBlur && (event => onBlur(id, event.target.value))}
      onInput={_onInput}
    />
  );
}

TextareaWidget.defaultProps = {
  autofocus: false,
  options: {},
};

export default TextareaWidget;
