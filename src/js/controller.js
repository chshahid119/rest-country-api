import * as model from "./model";
import cardsView from "./views/cardsView";

let mode;
// export const controlCountries = async function () {

const controlCountries = async function () {
  try {
    await model.loadCountries();
    cardsView.render(model.state.countriesPerPage);
  } catch (err) {
    console.log(err);
  }
};
controlCountries();

const controlPagination = function (page) {
  model.state.page = page;
  console.log(model.state.page);
  // Update Next Page
  model.divideIntoPages();
  cardsView.render(model.state.countriesPerPage);
};

const init = function () {
  cardsView.addEnableModeHandler();
  cardsView.getNextPage(model.state, controlPagination);
  cardsView.getPreviousPage(model.state, controlPagination);
  cardsView.getQuery();
  cardsView.getRegion();
};
init();
