import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section class="content">
        <article class="catalogue">
          <h1 class="catalogue__title">Your Favorite Restaurants</h1>
          <div class="catalogue__lists"></div>
        </article>
      </section>
      <div id="loadingIndicator" class="loading-indicator hidden"></div>
      <div id="errorMessage" class="error-message hidden"></div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('.catalogue__lists');
    const loadingIndicator = document.querySelector('#loadingIndicator');
    const errorMessage = document.querySelector('#errorMessage');

    try {
      loadingIndicator.classList.remove('hidden');
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

      if (restaurants.length === 0) {
        restaurantsContainer.innerHTML = '<p class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</p>';
      } else {
        restaurantsContainer.innerHTML = '';
        restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      }

      loadingIndicator.classList.add('hidden');
    } catch (error) {
      loadingIndicator.classList.add('hidden');
      errorMessage.classList.remove('hidden');
      errorMessage.innerText = 'Failed to load favorite restaurants. Please try again later.';
      console.error(error);
    }
  },
};

export default Favorite;
