import React from "react";

const DropDown = ({id, label, onChange, options, value}) => (
  <div>
    <label htmlFor={id} className="dd-label">{label}</label>
    <select id={id} value={value} onChange={onChange}>
      {options.map(x => <option key={x.code} value={x.code}>{x.name}</option>)}
    </select>
  </div>
);

export default DropDown;