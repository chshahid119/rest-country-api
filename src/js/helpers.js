import { API_URL, API_URL_REGION } from "./config";
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
    console.log(err);
  }
};
