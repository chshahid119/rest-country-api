import { API_URL } from "./config";
import { getJSON } from "./helpers";

export const state = {
  countries: [],
};

export const loadCountries = async function () {
  try {
    const data = await getJSON();
    // state.countries.push(data);
    state.countries = [...data];
  } catch (err) {
    console.log(err);
  }
};
