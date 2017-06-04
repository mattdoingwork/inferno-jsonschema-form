import Inferno from "inferno";

import { rangeSpec } from "../../utils";
import BaseInput from "./BaseInput";

function UpDownWidget(props) {
  return <BaseInput type="number" {...props} {...rangeSpec(props.schema)} />;
}

export default UpDownWidget;
