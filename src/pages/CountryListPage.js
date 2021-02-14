import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import { CountryList, DropDown } from "../components";

const CONTINENTS = [
  { code: "", name: "All" },
  { code: "AF", name: "Africa" },
  { code: "AS", name: "Asia" },
  { code: "EU", name: "Europe" },
  { code: "NA", name: "North America" },
  { code: "OC", name: "Oceania" },
  { code: "SA", name: "South America" },
];

const CountryListPage = ({countryList}) => {
  const history = useHistory();
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
          label="View a Specific Country"
          onChange={e => history.push(`/${e.target.value}`)}
          options={displayedCountries}
          value={""}
        />
      </div>
      <CountryList countryList={displayedCountries} />
    </div>
  );
};

export default CountryListPage;
