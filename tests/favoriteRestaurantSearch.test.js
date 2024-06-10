/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import FavoriteRestaurantView from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view';

// Tambahkan implementasi spyOnAllFunctions di sini
function spyOnAllFunctions(obj) {
  const spies = {};
  for (const key in obj) {
    if (typeof obj[key] === 'function') {
      spies[key] = jest.spyOn(obj, key);
    }
  }
  return spies;
}

describe('Searching restaurants', () => {
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants,
      view,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  it('should be able to capture the query typed by the user', () => {
    favoriteRestaurants.searchRestaurants.mockImplementation(() => []);

    searchRestaurants('restaurant a');

    expect(presenter.latestQuery).toEqual('restaurant a');
  });

  it('should ask the model to search for liked restaurants', () => {
    favoriteRestaurants.searchRestaurants.mockImplementation(() => []);

    searchRestaurants('restaurant a');

    expect(favoriteRestaurants.searchRestaurants).toHaveBeenCalledWith('restaurant a');
  });

  describe('When query is not empty', () => {
    it('should show the restaurants found by Favorite Restaurants', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item').length).toEqual(3);
        done();
      });

      favoriteRestaurants.searchRestaurants.mockImplementation((query) => {
        if (query === 'restaurant a') {
          return Promise.resolve([
            { id: 111, title: 'restaurant abc' },
            { id: 222, title: 'ada juga restaurant abcde' },
            { id: 333, title: 'ini juga boleh restaurant a' },
          ]);
        }

        return Promise.resolve([]);
      });

      searchRestaurants('restaurant a');
    });

    it('should show the name of the restaurants found by Favorite Restaurants', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        const restaurantTitles = document.querySelectorAll('.item__title');
        expect(restaurantTitles.item(0).textContent).toEqual('restaurant abc');
        expect(restaurantTitles.item(1).textContent).toEqual('ada juga restaurant abcde');
        expect(restaurantTitles.item(2).textContent).toEqual('ini juga boleh restaurant a');
        done();
      });

      favoriteRestaurants.searchRestaurants.mockImplementation((query) => {
        if (query === 'restaurant a') {
          return Promise.resolve([
            { id: 111, name: 'restaurant abc' },
            { id: 222, name: 'ada juga restaurant abcde' },
            { id: 333, name: 'ini juga boleh restaurant a' },
          ]);
        }
        return Promise.resolve([]);
      });

      searchRestaurants('restaurant a');
    });

    it('should show - when the restaurant returned does not contain a title', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        const restaurantTitles = document.querySelectorAll('.item__title');
        expect(restaurantTitles.item(0).textContent).toEqual('-');

        done();
      });

      favoriteRestaurants.searchRestaurants.mockImplementation((query) => {
        if (query === 'restaurant a') {
          return [{ id: 444 }];
        }

        return [];
      });

      searchRestaurants('restaurant a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      favoriteRestaurants.getAllRestaurants.mockImplementation(() => []);

      searchRestaurants(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('    ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it('should show all favorite restaurants', () => {
      favoriteRestaurants.getAllRestaurants.mockImplementation(() => []);

      searchRestaurants('    ');

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalled();
    });
  });

  describe('When no favorite restaurants could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item__not__found').length).toEqual(1);
        done();
      });

      favoriteRestaurants.searchRestaurants.mockImplementation((query) => []);
      searchRestaurants('restaurant a');
    });

    it('should not show any restaurant', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item').length).toEqual(0);
        done();
      });

      favoriteRestaurants.searchRestaurants.mockImplementation(() => []);
      searchRestaurants('restaurant a');
    });
  });
});
