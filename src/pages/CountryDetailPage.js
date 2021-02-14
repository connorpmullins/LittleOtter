import React, { useEffect, useState } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { DetailSection, Loader } from "../components";

const CountryDetail = ({ countryList }) => {
  const location = useLocation();
  const countryCode = location.pathname.slice(1).toUpperCase(); // pathname includes '/' at start
  const country = countryList.find((c) => c.code === countryCode);
  if (!country) {
    return <Redirect to="/error" />;
  }
  return (
    <div className="CountryDetail">
      <div className="header">
        <h1>{country.name}</h1>
      </div>
      <div className="detail-body">
        <DetailSection title="Capital" info={country.capital} />
        <DetailSection title="Flag" info={country.flag} type="img"/>
        <DetailSection title="Iso3 Code" info={country.iso3} />
        <DetailSection title="Phone Area Code" info={`+ ${country.phone}`} />
        <DetailSection title="Wikipedia Article" info={country.wiki} type="link"/>
        <DetailSection title="Currency" info={country.currency} />
        <DetailSection title="Currency Code" info={country.currencyCode} />
      </div>
    </div>
  );
};

export default CountryDetail;
