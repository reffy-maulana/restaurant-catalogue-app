import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <section class="content">
        <article class="detail">
          <div id="restaurant" class="restaurant"></div>
        </article>
      </section>
      <div id="loadingIndicator" class="loading-indicator hidden"></div>
      <div id="errorMessage" class="error-message hidden"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant');
    const loadingIndicator = document.querySelector('#loadingIndicator');
    const errorMessage = document.querySelector('#errorMessage');

    try {
      loadingIndicator.classList.remove('hidden');
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          city: restaurant.city,
          address: restaurant.address,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
          categories: restaurant.categories,
          menus: restaurant.menus,
          customerReviews: restaurant.customerReviews,
        },
      });

      loadingIndicator.classList.add('hidden');
    } catch (error) {
      loadingIndicator.classList.add('hidden');
      errorMessage.classList.remove('hidden');
      errorMessage.innerText = 'Failed to load restaurant details. Please try again later.';
      console.error(error);
    }
  },
};

export default Detail;
