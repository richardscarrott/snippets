export const SOURCE_DELETED = 'SOURCE_DELETED';
export const SOURCE_DELETED_UNDONE = 'SOURCE_DELETED_UNDONE';

export const sourceDeleted = source => ({
  type: SOURCE_DELETED,
  meta: {
    id: source.id,
    snackbar: {
      type: SOURCE_DELETED,
      payload: source
    }
  }
});

export const sourceDeletedUndone = source => ({
  type: SOURCE_DELETED_UNDONE,
  meta: {
    id: source.id,
    snackbar: {
      type: SOURCE_DELETED_UNDONE,
      payload: source
    }
  }
});
