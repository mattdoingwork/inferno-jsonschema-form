import Inferno from "inferno";

function RadioWidget(props) {
  const {
    options,
    value,
    required,
    disabled,
    readonly,
    autofocus,
    onInput,
  } = props;
  // Generating a unique field name to identify this set of radio buttons
  const name = Math.random().toString();
  const { enumOptions, inline } = options;
  // checked={checked} has been moved above name={name}, As mentioned in #349;
  // this is a temporary fix for radio button rendering bug in React, facebook/react#7630.
  return (
    <div className="field-radio-group">
      {enumOptions.map((option, i) => {
        const checked = option.value === value;
        const disabledCls = disabled || readonly ? "disabled" : "";
        const radio = (
          <span>
            <input
              type="radio"
              checked={checked}
              name={name}
              required={required}
              value={option.value}
              disabled={disabled || readonly}
              autoFocus={autofocus && i === 0}
              onInput={_ => onInput(option.value)}
            />
            <span>{option.label}</span>
          </span>
        );

        return inline
          ? <label key={i} className={`radio-inline ${disabledCls}`}>
              {radio}
            </label>
          : <div key={i} className={`radio ${disabledCls}`}>
              <label>
                {radio}
              </label>
            </div>;
      })}
    </div>
  );
}

RadioWidget.defaultProps = {
  autofocus: false,
};

export default RadioWidget;
