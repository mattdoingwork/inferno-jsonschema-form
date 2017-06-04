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
    onChange,
    onBlur,
  } = props;
  const _onChange = ({ target: { value } }) => {
    return onChange(value === "" ? options.emptyValue : value);
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
      onChange={_onChange}
    />
  );
}

TextareaWidget.defaultProps = {
  autofocus: false,
  options: {},
};

export default TextareaWidget;
