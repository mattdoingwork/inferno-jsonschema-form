import Inferno from "inferno";
import Component from "inferno-component";

import { shouldRender, parseDateString, toDateString, pad } from "../../utils";

function rangeOptions(start, stop) {
  let options = [];
  for (let i = start; i <= stop; i++) {
    options.push({ value: i, label: pad(i, 2) });
  }
  return options;
}

function readyForChange(state) {
  return Object.keys(state).every(key => state[key] !== -1);
}

function DateElement(props) {
  const {
    type,
    range,
    value,
    select,
    rootId,
    disabled,
    readonly,
    autofocus,
    registry,
    onBlur,
  } = props;
  const id = rootId + "_" + type;
  const { SelectWidget } = registry.widgets;
  return (
    <SelectWidget
      schema={{ type: "integer" }}
      id={id}
      className="form-control"
      options={{ enumOptions: rangeOptions(range[0], range[1]) }}
      placeholder={type}
      value={value}
      disabled={disabled}
      readonly={readonly}
      autofocus={autofocus}
      onInput={value => select(type, value)}
      onBlur={onBlur}
    />
  );
}

class AltDateWidget extends Component {
  static defaultProps = {
    time: false,
    disabled: false,
    readonly: false,
    autofocus: false,
  };

  constructor(props) {
    super(props);
    this.state = parseDateString(props.value, props.time);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(parseDateString(nextProps.value, nextProps.time));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shouldRender(this, nextProps, nextState);
  }

  onInput = (property, value) => {
    this.setState(
      { [property]: typeof value === "undefined" ? -1 : value },
      () => {
        // Only propagate to parent state if we have a complete date{time}
        if (readyForChange(this.state)) {
          this.props.onInput(toDateString(this.state, this.props.time));
        }
      }
    );
  };

  setNow = event => {
    event.preventDefault();
    const { time, disabled, readonly, onInput } = this.props;
    if (disabled || readonly) {
      return;
    }
    const nowDateObj = parseDateString(new Date().toJSON(), time);
    this.setState(nowDateObj, () => onInput(toDateString(this.state, time)));
  };

  clear = event => {
    event.preventDefault();
    const { time, disabled, readonly, onInput } = this.props;
    if (disabled || readonly) {
      return;
    }
    this.setState(parseDateString("", time), () => onInput(undefined));
  };

  get dateElementProps() {
    const { time } = this.props;
    const { year, month, day, hour, minute, second } = this.state;
    const data = [
      { type: "year", range: [1900, 2020], value: year },
      { type: "month", range: [1, 12], value: month },
      { type: "day", range: [1, 31], value: day },
    ];
    if (time) {
      data.push(
        { type: "hour", range: [0, 23], value: hour },
        { type: "minute", range: [0, 59], value: minute },
        { type: "second", range: [0, 59], value: second }
      );
    }
    return data;
  }

  render() {
    const { id, disabled, readonly, autofocus, registry, onBlur } = this.props;
    return (
      <ul className="list-inline">
        {this.dateElementProps.map((elemProps, i) => (
          <li key={i}>
            <DateElement
              rootId={id}
              select={this.onInput}
              {...elemProps}
              disabled={disabled}
              readonly={readonly}
              registry={registry}
              onBlur={onBlur}
              autofocus={autofocus && i === 0}
            />
          </li>
        ))}
        <li>
          <a href="#" className="btn btn-info btn-now" onClick={this.setNow}>
            Now
          </a>
        </li>
        <li>
          <a
            href="#"
            className="btn btn-warning btn-clear"
            onClick={this.clear}>
            Clear
          </a>
        </li>
      </ul>
    );
  }
}

export default AltDateWidget;
