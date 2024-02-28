import { API_URL, API_URL_REGION, API_URL_NAME } from "./config";
export const getJSON = async function () {
  try {
    const res = await fetch(`${API_URL}`);
    const data = await res.json();

    return data;
  } catch (err) {
    throw err;
  }
};

export const getJSONRegion = async function (region) {
  try {
    const res = await fetch(`${API_URL_REGION}/region/${region}`);
    const data = await res.json();

    return data;
  } catch (err) {
    throw err;
  }
};

export const getJSONName = async function (country) {
  try {
    const res = await fetch(`${API_URL_NAME}${country}`);

    const data = await res.json();

    return data;
  } catch (err) {
    throw err;
  }
};
