import React, { useState } from "react";
import {} from "react-router-dom";
import { DropDown } from "../components";

const CONTINENTS = [
  { id: "", title: "All" },
  { id: "AF", title: "Africa" },
  { id: "AS", title: "Asia" },
  { id: "EU", title: "Europe" },
  { id: "NA", title: "North America" },
  { id: "OC", title: "Oceania" },
  { id: "SA", title: "South America" },
];

const CountryListPage = ({countryList}) => {
  const [continentFilter, setContinentFilter] = useState("");
  // get linked countryID from the router
  // if the country doesn't exist, nav to the error page
  // if the country does exist, fetch additional country data (if necessary)
  return (
    <div className="CountryListPage">
      <div className="header">
        <h1> Country Data </h1>
        <DropDown
          id="continent"
          label="Select a Continent"
          onChange={e => setContinentFilter(e.target.value)}
          options={CONTINENTS}
          value={continentFilter}
        />
        <DropDown
          id="country"
          label="View a specific country"
          onChange={e => setContinentFilter(e.target.value)}
          options={CONTINENTS}
          value={continentFilter}
        />
      </div>
    </div>
  );
};

export default CountryListPage;
