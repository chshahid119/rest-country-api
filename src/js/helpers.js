import { API_URL } from "./config";
export const getJSON = async function () {
  try {
    const res = await fetch(`${API_URL}`);
    const data = await res.json();

    return data;
  } catch (err) {
    throw err;
  }
};
