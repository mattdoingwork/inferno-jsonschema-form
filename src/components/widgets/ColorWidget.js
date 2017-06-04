import Inferno from "inferno";
import BaseInput from "./BaseInput";

function ColorWidget(props) {
  const { disabled, readonly } = props;
  return <BaseInput type="color" {...props} disabled={disabled || readonly} />;
}

export default ColorWidget;
