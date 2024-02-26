import * as model from "./model";
import cardsView from "./views/cardsView";

// export const controlCountries = async function () {

const controlCountries = async function () {
  try {
    await model.loadCountries();
    cardsView.render(model.state.countries);
  } catch (err) {
    console.log(err);
  }
};
controlCountries();
