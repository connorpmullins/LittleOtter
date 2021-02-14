const fetchAndStoreCountryData = async (countryList, setCountryList) => {
  const countryData = {};
  // if countries don't exist yet, get them
  const countryNames = await fetch("http://localhost:3001/api/names")
    .then((res) => res.json())
    .catch((err) =>
      console.error("Error occured while fetching country names!", err)
    );

  const countryContinents = await fetch("http://localhost:3001/api/continent")
    .then((res) => res.json())
    .catch((err) =>
      console.error("Error occured while fetching country continents!", err)
    );

  Object.keys(countryNames).forEach((countryCode) => {
    countryData[countryCode] = {
      name: countryNames[countryCode],
      continent: countryContinents[countryCode],
    };
  });
  setCountryList(countryData);
  localStorage.setItem("countryList", JSON.stringify(countryData));
};

export { fetchAndStoreCountryData };
