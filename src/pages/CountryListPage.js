import React, { useEffect, useState } from "react";
import {} from "react-router-dom";
import { CountryList, DropDown } from "../components";

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
  const [displayedCountries, setDisplayedCountries] = useState(countryList);
  useEffect(() => {
    if (continentFilter) {
      setDisplayedCountries(countryList.filter(c => c.continent === continentFilter));
    } else {
      setDisplayedCountries(countryList)
    }
  }, [continentFilter, countryList, setDisplayedCountries])

  console.log({displayedCountries})
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
      <CountryList
        countryList={displayedCountries}
        onSelect={countryID => console.log('navigate to: ', countryID)}
      />
    </div>
  );
};

export default CountryListPage;
