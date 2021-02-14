import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CountryDetailPage, CountryListPage, ErrorPage } from "./pages";
import { Loader } from "./components";
import { fetchAndStoreCountryData } from "./utils";

const localStorage = window.localStorage;
const storedCountryList = JSON.parse(localStorage.getItem("countryList"));

const App = () => {
  const [countryList, setCountryList] = useState(storedCountryList);

  useEffect(() => {
    if (!countryList) fetchAndStoreCountryData(countryList, setCountryList);
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
          <CountryDetailPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
