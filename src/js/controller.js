import * as model from "./model";
import cardsView from "./views/cardsView";

// export const controlCountries = async function () {

const controlCountries = async function () {
  try {
    await model.loadCountries();
    cardsView.render(model.state.countriesPerPage);
  } catch (err) {
    message = "Sorry that country doesn't exist Please Serach any other! :(";
    cardsView.renderErrorMessage(message);
  }
};

const controlPagination = function (page) {
  try {
    model.state.page = page;

    // Update Next Page
    model.divideIntoPages();
    cardsView.render(model.state.countriesPerPage);
  } catch (err) {
    message = "Sorry that country doesn't exist Please Serach any other! :(";
    cardsView.renderErrorMessage(message);
  }
};
controlCountries();

const controlRegion = async function (data) {
  try {
    const region = data;
    model.state.region = region.toLowerCase();

    await model.loadRegionWiseCountries();
    cardsView.render(model.state.countriesPerPage);
  } catch (err) {
    message = "Sorry that country doesn't exist Please Serach any other! :(";
    cardsView.renderErrorMessage(message);
  }
};

const controlSearch = async function (query) {
  try {
    model.state.searchQuery = query;

    await model.loadNameWiseCountry();

    cardsView.render(model.state.searchedCountry);

    // cardsView.render();
  } catch (err) {
    message = "Sorry that country doesn't exist Please Serach any other! :(";
    cardsView.renderErrorMessage(message);
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
