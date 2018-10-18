import React from "react";
import "./Form.css";

const Form = props => {
  let content = null,
    change = null,
    label = null,
    click = null;

  if (!props.type) {
    props.type = "text";
  }
  if (typeof props.change === "function") {
    change = props.change;
  } else {
    change = null;
  }
  if (typeof props.click === "function") {
    click = props.click;
  } else {
    click = null;
  }
  if (props.label) {
    label = (
      <label className="Form" {...props.label.attributes}>
        {props.label}
      </label>
    );
  }

  switch (props.type) {
    case "select":
      content = (
        <select
          {...props.attributes}
          value={props.value}
          className={props.class}
          onChange={change}
        >
          {props.options.map(option => (
            <option key={option.id || option.value} value={option.value}>
              {option.displayValue || option.value}
            </option>
          ))}
        </select>
      );
      break;
    case "textarea":
      content = (
        <textarea
          {...props.attributes}
          className={props.class}
          onChange={e => change(e, props.id)}
        >
          {props.value}
        </textarea>
      );
      break;
    case "submit":
      content = (
        <input
          className={props.class}
          type="submit"
          {...props.attributes}
          value={props.value || "Submit"}
        />
      );
      break;
    case "button":
      content = (
        <input
          className={props.class}
          type="button"
          {...props.attributes}
          value={props.value || "Submit"}
          onClick={e => click(e, props.id)}
        />
      );
      break;
    default:
      content = (
        <input
          type="text"
          {...props.attributes}
          className={props.class}
          value={props.value}
          onChange={e => change(e, props.id)}
        />
      );
  }
  return (
    <div className="Form">
      {label}
      {content}
    </div>
  );
};

export default Form;
