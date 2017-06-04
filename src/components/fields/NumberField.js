import Inferno from "inferno";
import { asNumber } from "../../utils";

function NumberField(props) {
  const { StringField } = props.registry.fields;
  return (
    <StringField
      {...props}
      onChange={value => props.onChange(asNumber(value))}
    />
  );
}

NumberField.defaultProps = {
  uiSchema: {},
};

export default NumberField;
