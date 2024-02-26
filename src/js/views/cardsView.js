class cardsView {
  _data;
  _parentElement = document.querySelector(".section-hero__cards");

  render(data) {
    this._data = data;
    // console.log(this._data);

    this._data.map((el) => {
      console.log(el.name);
      const markup = `<div class="section-hero__cards-card">
      <img src="${el.flags.png}" alt="flag" />
      <h3>${el.name.common}</h3>
      <p><span>Population:</span> 1999999999999</p>
      <p><span>Region:</span> Asia</p>
      <p><span>Capital:</span> Islambad</p>
      </div>`;
      this._parentElement.insertAdjacentHTML("afterbegin", markup);
    });
  }
  getSearchQuery() {
    searchElement = document.querySelector("");
  }
}

export default new cardsView();
