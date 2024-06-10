/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
import CONFIG from '../../global/config';

const createRestaurantItemTemplate = (restaurant) => `
  <a href="#/detail/${restaurant.id || '-'}" class="restaurant-item catalogue__item" tabindex="0" data-id="${restaurant.id || '-'}">
    <picture>
      <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMG_URL_SMALL.replace('<pictureId>', restaurant.pictureId)}">
      <img data-src="${CONFIG.BASE_IMG_URL_MEDIUM.replace('<pictureId>', restaurant.pictureId)}" alt="${restaurant.name || '-'}" class="item__image lazyload" />
    </picture>
    <div class="item__content">
      <h1 class="item__title">${restaurant.name || '-'}</h1>
      <p class="item__city">${restaurant.city || '-'}</p>
      <p class="item__rating">Rating ${restaurant.rating || '-'}</p>
      <p class="item__description">${restaurant.description || '-'}</p>
    </div>
  </a>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant__detail">
    <picture>
      <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMG_URL_SMALL.replace('<pictureId>', restaurant.pictureId)}">
      <img data-src="${CONFIG.BASE_IMG_URL_MEDIUM.replace('<pictureId>', restaurant.pictureId)}" alt="${restaurant.name}" class="restaurant__image lazyload" />
    </picture>
    <div class="restaurant__info">
      <h2 class="restaurant__title">${restaurant.name}</h2>
      <p class="restaurant__rating">Rating: ${restaurant.rating}</p>
      <p class="restaurant__city">City: ${restaurant.city}</p>
      <p class="restaurant__address">Address: ${restaurant.address}</p>
      <h3 class="description__title">Description</h3>
      <p class="restaurant__description">${restaurant.description}</p>
      <div class="restaurant__categories">
        <h3 class="categories__title">Categories</h3>
        ${restaurant.categories.map((category) => `<span class="category">${category.name}</span>`).join('')}
      </div>
      <div class="restaurant__menus">
            <h3 class="menu__title">Menus</h3>
            <div class="menu__columns">
                <div class="menu__foods">
                    <h4>Foods</h4>
                    <ul>
                        ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
                    </ul>
                </div>
                <div class="menu__drinks">
                    <h4>Drinks</h4>
                    <ul>
                        ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
      <div class="restaurant__reviews">
        <h3>Customer Reviews</h3>
        ${restaurant.customerReviews
          .map(
            (review) => `
          <div class="review">
            <h4>${review.name}</h4>
            <p>${review.review}</p>
            <span>${review.date}</span>
          </div>`
          )
          .join('')}
      </div>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

// eslint-disable-next-line import/prefer-default-export, max-len
export { createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate };
