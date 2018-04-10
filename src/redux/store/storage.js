const createChromeStorage = type => {
  const storage = chrome.storage[type];
  return {
    getItem: key => {
      return new Promise((resolve, reject) => {
        storage.get((state = {}) => {
          const error = chrome.runtime.lastError;
          if (error) {
            return reject(error);
          }
          resolve(state[key]);
        });
      });
    },
    setItem: (key, item) => {
      return new Promise((resolve, reject) => {
        storage.set({ [key]: item }, () => {
          const error = chrome.runtime.lastError;
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      });
    },
    removeItem: key => {
      return new Promise((resolve, reject) => {
        storage.remove(key, () => {
          const error = chrome.runtime.lastError;
          if (error) {
            return reject(error);
          }
          resolve();
        });
      });
    }
  };
};

export const chromeSyncStorage = createChromeStorage('sync');
export const chromeLocalStorage = createChromeStorage('local');
