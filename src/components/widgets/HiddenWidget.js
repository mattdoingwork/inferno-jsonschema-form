import Inferno from "inferno";

function HiddenWidget({ id, value }) {
  return (
    <input
      type="hidden"
      id={id}
      value={typeof value === "undefined" ? "" : value}
    />
  );
}

export default HiddenWidget;
