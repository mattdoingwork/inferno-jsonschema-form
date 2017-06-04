import Inferno from "inferno";

import BaseInput from "./BaseInput";

function URLWidget(props) {
  return <BaseInput type="url" {...props} />;
}

export default URLWidget;
