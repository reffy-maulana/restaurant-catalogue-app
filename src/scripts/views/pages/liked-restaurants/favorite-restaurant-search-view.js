/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable class-methods-use-this */

import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantView {
  getTemplate() {
    return `
    <section class="content">
      <article class="catalogue">
        <h1 class="catalogue__title">Your Favorite Restaurants</h1>
        <input id="query" type="text">
        <div class="catalogue__lists">
          <div class="restaurant-result-container">
            <ul id="restaurants" class="restaurants"></ul>
          </div>
        </div>
      </article>
    </section>
    <div id="loadingIndicator" class="loading-indicator hidden"></div>
    <div id="errorMessage" class="error-message hidden"></div>
  `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.querySelector('.restaurants').innerHTML = html;

    document.querySelector('.restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return `
      <div class="restaurant-item__not__found">
        Tidak ada restaurant untuk ditampilkan
      </div>
    `;
  }
}

export default FavoriteRestaurantView;
