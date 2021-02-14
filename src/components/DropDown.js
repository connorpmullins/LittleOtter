import React from "react";

const DropDown = ({id, label, onChange, options, value}) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <select id={id} value={value} onChange={onChange}>
      {options.map(x => <option key={x.id} value={x.id}>{x.title}</option>)}
    </select>
  </div>
);

export default DropDown;