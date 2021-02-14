import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { CountryDetailPage, CountryListPage, ErrorPage } from "./pages";
import { Loader } from "./components";
import { hydrateCountryData, fetchAndStoreCountryList } from "./utils";

const localStorage = window.localStorage;
const storedCountryList = JSON.parse(localStorage.getItem("countryList"));

const App = () => {
  const [countryList, setCountryList] = useState(storedCountryList);

  useEffect(() => {
    if (!countryList) {
      fetchAndStoreCountryList(setCountryList);
    } else if (countryList[0] && !countryList[0].iso3){
      // I want to separate these calls so rendering doesn't hang
      // waiting for data CountryListPage doesn't require
      hydrateCountryData(countryList, setCountryList);
    }
  }, [countryList, setCountryList]);

  if (!countryList) return <Loader />;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CountryListPage countryList={countryList}/>
        </Route>
        <Route path="/error">
          <ErrorPage />
        </Route>
        <Route path="/:countryID">
          <CountryDetailPage countryList={countryList}/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
