import React from "react";
import {Link} from "react-router-dom";

const CountryList = ({countryList, onSelect}) => (
  <div className="country-list">
    {countryList.map(country => (
      <Link 
        className="country-pressable"
        key={country.code}
        to={`/${country.code}`}
      >{country.name}</Link>
    ))}
  </div>
);

export default CountryList;