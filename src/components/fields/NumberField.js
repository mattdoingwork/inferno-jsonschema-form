import Inferno from "inferno";
import { asNumber } from "../../utils";

function NumberField(props) {
  const { StringField } = props.registry.fields;
  return (
    <StringField
      {...props}
      onInput={value => props.onInput(asNumber(value))}
    />
  );
}

NumberField.defaultProps = {
  uiSchema: {},
};

export default NumberField;
