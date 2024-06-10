const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMG_URL_SMALL: 'https://restaurant-api.dicoding.dev/images/small/<pictureId>',
  BASE_IMG_URL_MEDIUM: 'https://restaurant-api.dicoding.dev/images/medium/<pictureId>',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'restaurant-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
};

export default CONFIG;
