class cardsView {
  _data;
  _parentElement = document.querySelector(".section-hero__cards");
  _darkMode = document.querySelector(".header-modes");
  _nextBtn = document.querySelector(".next");
  _previousBtn = document.querySelector(".previous");
  _searchQuery = document.querySelector(".section-hero__input-search");
  _region = document.querySelector(".region-select");

  render(data) {
    this._data = data;

    this.clear();

    if (this._data.length == 1) {
      const el = this._data;

      const markup = `<div class="section-hero__cards-card">
      <img src="${el[0].flags.png}" alt="${el[0].flags.alt}" />
      <h3>${el[0].name.common}</h3>
      <p><span>Population:</span> ${el[0].population}</p>
      <p><span>Region:</span> ${el[0].region}</p>
      <p><span>Capital:</span> ${el[0].capital}</p>
      </div>`;

      this._parentElement.insertAdjacentHTML("afterbegin", markup);
    } else {
      this._data.map((el) => {
        const markup = `<div class="section-hero__cards-card">
        <img src="${el.flags.png}" alt="${el.flags.alt}" />
        <h3>${el.name.common}</h3>
        <p><span>Population:</span> ${el.population}</p>
        <p><span>Region:</span> ${el.region}</p>
        <p><span>Capital:</span> ${el.capital}</p>
        </div>`;

        this._parentElement.insertAdjacentHTML("afterbegin", markup);
      });
    }
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
      if (data.page >= 25) return;
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
  getRegion(handlerFunc) {
    this._region.addEventListener("change", function (e) {
      e.preventDefault();
      handlerFunc(e.target.value);
    });
  }

  getQuery(handlerFunc) {
    this._searchQuery.addEventListener("change", function (e) {
      e.preventDefault();

      handlerFunc(e.target.value);
    });
  }

  renderErrorMessage(msg) {
    const markup = ` <div class="error-msg">
    <p class="error-msg-p">
      ${msg}
    </p>
  </div> `;

    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new cardsView();
