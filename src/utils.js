import { CURRENCY_HTML_CODES } from "./currencies";

const get = async (type) =>
  fetch(`http://localhost:3001/api/${type}`)
    .then((res) => res.json())
    .catch((err) => console.error(`Error occured while fetching ${type}`, err));

const fetchAndStoreCountryList = async (setCountryList) => {
  const countryList = [];
  const countryNames = await get("names");
  const countryContinents = await get("continent");

  Object.keys(countryNames).forEach((countryCode) => {
    countryList.push({
      code: countryCode,
      continent: countryContinents[countryCode],
      name: countryNames[countryCode],
    });
  });
  countryList.sort((a, b) => (a.name < b.name ? -1 : 1));
  localStorage.setItem("countryList", JSON.stringify(countryList));
  setCountryList(countryList);
};

const fetchAdditionalCountryData = async () => {
  const iso3 = await get("iso3");
  const capital = await get("capital");
  const currency = await get("currency");
  const phone = await get("phone");
  return { iso3, capital, currency, phone };
};

const hydrateCountryData = async (countryList, setCountryList) => {
  const { iso3, capital, currency, phone } = await fetchAdditionalCountryData();
  const hydratedList = countryList.map((country) => ({
    ...country,
    capital: capital[country.code],
    currency: currency[country.code],
    currencyCode: CURRENCY_HTML_CODES[currency[country.code]],
    flag: `https://www.countryflags.io/${country.code}/shiny/64.png`,
    iso3: iso3[country.code],
    phone: phone[country.code],
    wiki: `https://en.wikipedia.org/wiki/${country.name}`,
  }));
  localStorage.setItem("countryList", JSON.stringify(hydratedList));
  setCountryList(hydratedList);
};

export { hydrateCountryData, fetchAndStoreCountryList };
