import AddedSnackbar from './added-snack-bar/added-snackbar';
import DeletedSnackbar from './deleted-snack-bar/deleted-snackbar';
import RefreshedSnackbar from './refreshed-snack-bar/refreshed-snackbar';

const SourcesSnackbar = ({
  id,
  payload: { source },
  onClose,
  onUndoDelete
}) => {
  switch (id) {
    case ADD_SOURCE_SUCCESS:
      return <AddedSnackbar source={source} onClose={onClose} />;
    case DELETE_SOURCE:
      return (
        <DeletedSnackbar
          source={source}
          onUndo={onUndoDelete}
          onClose={onClose}
        />
      );
    case REFRESH_SOURCE:
      return <RefreshedSnackbar source={source} onClose={onClose} />;
    default:
      return null;
  }
};

export default SourcesSnackbar;
