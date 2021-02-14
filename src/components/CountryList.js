import React from "react";

const CountryList = ({countryList, onSelect}) => (
  <div className="countryList">
    {countryList.map(country => (
      <div 
        key={country.code}
        onClick={() => onSelect(country.code)}
        className="country-pressable"
      >{country.name}</div>
    ))}
  </div>
);

export default CountryList;