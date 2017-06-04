import Inferno from "inferno";

function AltDateTimeWidget(props) {
  const { AltDateWidget } = props.registry.widgets;
  return <AltDateWidget time {...props} />;
}

export default AltDateTimeWidget;
