import Inferno from "inferno";

import { rangeSpec } from "../../utils";
import BaseInput from "./BaseInput";

function RangeWidget(props) {
  const { schema, value } = props;
  return (
    <div className="field-range-wrapper">
      <BaseInput type="range" {...props} {...rangeSpec(schema)} />
      <span className="range-view">{value}</span>
    </div>
  );
}

export default RangeWidget;
