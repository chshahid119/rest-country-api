class cardsView {
  _data;
  _parentElement = document.querySelector(".section-hero__cards");
  _darkMode = document.querySelector(".header-modes");
  _nextBtn = document.querySelector(".next");
  _previousBtn = document.querySelector(".previous");
  _searchQuery = document.querySelector(".section-hero__input-search");
  _region = document.querySelector(".region-select");

  getRegion() {
    this._region.addEventListener("onchnage", function (e) {
      e.preventDefault();
      console.log(e.target.value);
    });
  }
  render(data) {
    this._data = data;
    // console.log(this._data);
    this.clear();

    this._data.map((el) => {
      // console.log(el.name);
      const markup = `<div class="section-hero__cards-card">
      <img src="${el.flags.png}" alt="flag" />
      <h3>${el.name.common}</h3>
      <p><span>Population:</span> ${el.population}</p>
      <p><span>Region:</span> ${el.region}</p>
      <p><span>Capital:</span> ${el.capital}</p>
      </div>`;

      this._parentElement.insertAdjacentHTML("afterbegin", markup);
    });
  }

  clear() {
    this._parentElement.innerHTML = "";
  }

  addEnableModeHandler() {
    this._darkMode.addEventListener("click", function () {
      document.body.classList.toggle("darkMode");
      document.querySelector(".header-color").classList.toggle("header-color");
    });
  }

  getNextPage(data, handlerFunc) {
    this._nextBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (data.page == 25) return;
      let gotoPage = (data.page += 1);
      handlerFunc(gotoPage);
    });
  }
  getPreviousPage(data, handlerFunc) {
    this._previousBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (data.page == 1) return;
      let gotoPage = (data.page -= 1);
      handlerFunc(gotoPage);
    });
  }

  getQuery() {
    this._searchQuery.addEventListener("onChange", function (e) {
      e.preventDefault();
    });
  }
}

export default new cardsView();
