import Inferno from "inferno";

const REQUIRED_FIELD_SYMBOL = "*";

function TitleField(props) {
  const { id, title, required } = props;
  const legend = required ? title + REQUIRED_FIELD_SYMBOL : title;
  return <legend id={id}>{legend}</legend>;
}

export default TitleField;
