import { getJSON, getJSONRegion } from "./helpers";

export const state = {
  countries: [],
  countriesPerPage: [],
  resPerPage: 4,
  page: 1,
  region: "",
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
    console.log(err);
  }
};

export const loadRegionWiseCountries = async function () {
  try {
    console.log(state.region);
    const data = await getJSONRegion(state.region);
    console.log(data);

    state.countries = [...data];
    divideIntoPages(data);
  } catch (err) {
    console.log(err);
  }
};
