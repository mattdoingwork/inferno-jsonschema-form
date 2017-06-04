import Inferno from "inferno";

import BaseInput from "./BaseInput";

function EmailWidget(props) {
  return <BaseInput type="email" {...props} />;
}

export default EmailWidget;
