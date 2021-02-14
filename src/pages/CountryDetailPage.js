import React, { useState } from "react";
import {} from "react-router-dom";
import { DropDown, Loader } from "../components";

const CONTINENTS = [
  { id: "", title: "All" },
  { id: "AF", title: "Africa" },
  { id: "AS", title: "Asia" },
  { id: "EU", title: "Europe" },
  { id: "NA", title: "North America" },
  { id: "OC", title: "Oceania" },
  { id: "SA", title: "South America" },
];

/* Fetch some data like this: 
  const [countryList, setCountryList] = useState(storedCountryList);

  useEffect(() => {
    if (!countryList) {
      const fetchAndStoreCountryData = async () => {
        // if countries don't exist yet, get them
        const countryNames = await fetch("http://localhost:3001/api/names")
        .then((res) => res.json())
        .catch(err => console.error("Error occured while fetching country names!", err))

        const countryContinents = await fetch("http://localhost:3001/api/continent")
        .then((res) => res.json())
        .catch(err => console.error("Error occured while fetching country continents!", err))

        console.log({countryNames, countryContinents})
          // setCountryList(json);
          // localStorage.setItem("countryList", JSON.stringify(json))
      };
      fetchAndStoreCountryData();
    }
  }, [countryList]);
*/


const CountryDetail = () => {
  const [countryInfo, setCountryInfo] = useState("");
  // get linked countryID from the router
  // if the country doesn't exist, nav to the error page
  // if the country does exist, fetch additional country data (if necessary)
  if (!countryInfo) return <Loader />;
  return (
    <div className="CountryDetail">
      <h1> Country Data </h1>
    </div>
  );
};

export default CountryDetail;
