import Inferno from "inferno";

import BaseInput from "./BaseInput";

function PasswordWidget(props) {
  return <BaseInput type="password" {...props} />;
}

export default PasswordWidget;
