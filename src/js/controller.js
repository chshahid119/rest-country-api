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

const controlPagination = function (page) {
  model.state.page = page;
  console.log(model.state.page);
  // Update Next Page
  model.divideIntoPages();
  cardsView.render(model.state.countriesPerPage);
};
controlCountries();

const controlRegion = async function (data) {
  const region = data;
  model.state.region = region.toLowerCase();

  await model.loadRegionWiseCountries();
  cardsView.render(model.state.countriesPerPage);
};

const controlSearch = async function (query) {
  try {
    model.state.searchQuery = query;
    console.log(model.state.searchQuery);

    await model.loadNameWiseCountry();

    cardsView.render(model.state.searchedCountry);
    console.log(model.state.searchedCountry);

    // cardsView.render();
  } catch (err) {
    cardsView.renderErrorMessage();
  }
};

export const cleanSearchedArray = function () {
  model.state.searchedCountry.pop();
};

const init = function () {
  cardsView.addEnableModeHandler();
  cardsView.getNextPage(model.state, controlPagination);
  cardsView.getPreviousPage(model.state, controlPagination);
  cardsView.getRegion(controlRegion);

  cardsView.getQuery(controlSearch);
};
init();
