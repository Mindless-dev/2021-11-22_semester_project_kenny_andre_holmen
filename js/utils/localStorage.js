export function addToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getfromstorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return [];
  } else {
    return JSON.parse(value);
  }
}

export function removeFromStorage(key) {
  localStorage.removeItem(key);
}
