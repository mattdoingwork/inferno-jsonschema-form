import Inferno from "inferno";

import BaseInput from "./BaseInput";

function fromJSONDate(jsonDate) {
  return jsonDate ? jsonDate.slice(0, 19) : "";
}

function toJSONDate(dateString) {
  if (dateString) {
    return new Date(dateString).toJSON();
  }
}

function DateTimeWidget(props) {
  const { value, onInput } = props;
  return (
    <BaseInput
      type="datetime-local"
      {...props}
      value={fromJSONDate(value)}
      onInput={value => onInput(toJSONDate(value))}
    />
  );
}

export default DateTimeWidget;
