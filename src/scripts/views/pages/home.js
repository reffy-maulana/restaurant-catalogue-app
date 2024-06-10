import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="hero">
        <div class="hero__inner">
          <h1 class="hero__title">Choose Your Favorite Restaurant!</h1>
          <p class="hero__tagline">Taste the World: Explore Culinary Delights at Every Corner</p>
        </div>
      </section>
      <section class="content">
        <article class="catalogue">
          <h1 class="catalogue__title">Explore Restaurants</h1>
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
      const restaurants = await RestaurantSource.homeRestaurants();

      restaurantsContainer.innerHTML = '';

      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      loadingIndicator.classList.add('hidden');
    } catch (error) {
      loadingIndicator.classList.add('hidden');
      errorMessage.classList.remove('hidden');
      errorMessage.innerText = 'Failed to load restaurant list. Please try again later.';
      console.error(error);
    }
  },
};

export default Home;
