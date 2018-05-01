export const MIGRATED = 'MIGRATED';

export const migrations = {
  1: () => {
    return {
      ui: {
        snackbar: {
          type: MIGRATED,
          payload: {
            message:
              "Unfortunately we've had to delete your existing sources due to breaking changes in the latest version of Snippets. On a more positive note, adding them back should be much simpler with the latest updates. #Sorry #Beta"
          }
        }
      }
    };
  }
};
