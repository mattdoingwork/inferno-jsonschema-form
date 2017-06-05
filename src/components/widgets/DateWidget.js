import Inferno from "inferno";

import BaseInput from "./BaseInput";

function DateWidget(props) {
  const { onInput } = props;
  return (
    <BaseInput
      type="date"
      {...props}
      onInput={value => onInput(value || undefined)}
    />
  );
}

export default DateWidget;
