import Inferno from "inferno";

const BaseInput = props => {
  const { ...inputProps } = props;

  const _onChange = ({ target: { value } }) => {
    return props.onChange(value === "" ? props.options.emptyValue : value);
  };

  return (
    <input
      className="form-control"
      readOnly={props.readonly}
      disabled={props.disabled}
      autoFocus={props.autofocus}
      value={props.value === null ? "" : props.value}
      {...inputProps}
      onChange={_onChange}
      onBlur={
        props.onBlur &&
          (event => props.onBlur(inputProps.id, event.target.value))
      }
    />
  );
};

export default BaseInput;
