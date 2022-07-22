const EXPIRATION_TIME = 60 * 60 * 1000;

export const removeItemFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const getItemFromLocalStorage = (key) => localStorage.getItem(key);

export const setItemToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);

  let timer;
  timer = setTimeout(() => {
    removeItemFromLocalStorage(key);
    timer && clearTimeout(timer);
  }, EXPIRATION_TIME);
};
