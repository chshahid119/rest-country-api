import { getJSON, getJSONRegion, getJSONName } from "./helpers";

export const state = {
  countries: [],
  countriesPerPage: [],
  resPerPage: 4,
  page: 1,
  region: "",
  searchQuery: "",
  searchedCountry: [],
};

export const divideIntoPages = function (data) {
  page = state.page;
  const start = (page - 1) * state.resPerPage;
  const end = page * state.resPerPage;

  state.countriesPerPage = state.countries.slice(start, end);
};

export const loadCountries = async function () {
  try {
    const data = await getJSON();
    // state.countries.push(data);
    state.countries = [...data];
    divideIntoPages(data);
  } catch (err) {
    throw err;
  }
};

export const loadRegionWiseCountries = async function () {
  try {
    const data = await getJSONRegion(state.region);

    state.countries = [...data];
    divideIntoPages(data);
  } catch (err) {
    throw err;
  }
};

export const loadNameWiseCountry = async function () {
  try {
    const data = await getJSONName(state.searchQuery);

    state.searchedCountry = data;
  } catch (err) {
    throw err;
  }
};
