import React, { useEffect, useState } from "react";
import {useLocation, Redirect} from "react-router-dom";
import { Loader } from "../components";
import {fetchAndStoreCountryData} from "../utils";

const CountryDetail = () => {
  const location = useLocation();
  const countryCode = location.pathname.slice(1); // pathname includes '/' at start
  const countryData = JSON.parse(localStorage.getItem(countryCode));
  // const [countryInfo, setCountryInfo] = useState(countryData);
  // useEffect(() => {
// 
  // })
  // get linked countryID from the router
  // if the country doesn't exist, nav to the error page
    // Redirect
  // if the country does exist, fetch additional country data (if necessary)
  // if (!countryInfo) return <Loader />;
  return (
    <div className="CountryDetail">
      <h1> Country Data </h1>
    </div>
  );
};

export default CountryDetail;
