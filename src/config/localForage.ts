import localforage from 'localforage';

// use localStorage strategy
const forage = localforage;

forage.setDriver(localforage.LOCALSTORAGE);

forage.config({
  driver: localforage.LOCALSTORAGE,
  name: 'product-app',
  version: 0.1,
});

export default forage;
