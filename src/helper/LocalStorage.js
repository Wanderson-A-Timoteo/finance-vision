const isLocalStorageAvailable = () => {
  try {
    return typeof localStorage !== 'undefined';
  } catch (e) {
    return false;
  }
};

export const getData = (key) => {
  if (!isLocalStorageAvailable()) return null;
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const storeData = (key, item) => {
  if (!isLocalStorageAvailable()) return;
  localStorage.setItem(key, JSON.stringify(item));
};
