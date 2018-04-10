import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { Route, Link } from 'react-router-dom';
import SourceList from './source-list/source-list';
import AddSource from './add-source/add-source';
import { ADD_SOURCE_SUCCEEDED } from '../../../../redux/actions/add-source/add-source';
import {
  refreshSourceRequested,
  REFRESH_SOURCE_SUCCEEDED
} from '../../../../redux/actions/refresh-source/refresh-source';
import {
  sourceDeleted,
  sourceDeletedUndone,
  SOURCE_DELETED
} from '../../../../redux/actions/delete-source/delete-source';
import snackbarClosed from '../../../../redux/actions/snackbar-closed/snackbar-closed';
import Dialog from 'material-ui/Dialog';
import NoResults from './no-results/no-results';
import AddedSnackbar from './added-snackbar/added-snackbar';
import DeletedSnackbar from './deleted-snackbar/deleted-snackbar';
import RefreshedSnackbar from './refreshed-snackbar/refreshed-snackbar';
import { sourcesSelector } from '../../../../redux/selectors/sources/sources';
import { snackbarSelector } from '../../../../redux/selectors/ui/ui';
import styles from './sources.css';

const AddSourceRoute = props => (
  <Route {...props}>
    {({ match, history }) => {
      const onClose = () => history.goBack();
      return (
        <Dialog
          open={!!match}
          onClose={onClose}
          aria-labelledby="form-add-source"
        >
          <AddSource onClose={onClose} />
        </Dialog>
      );
    }}
  </Route>
);

class Sources extends Component {
  render() {
    const {
      match,
      sources,
      snackbar,
      onDelete,
      onDeleteUndo,
      onRefresh,
      onSnackbarClose
    } = this.props;
    return (
      <Fragment>
        <AddSourceRoute path={`${match.path}add`} />
        {sources.length ? (
          <SourceList
            className={styles.sourceList}
            sources={sources}
            onDelete={onDelete}
            onRefresh={onRefresh}
          />
        ) : (
          <NoResults className={styles.noResults} match={match} />
        )}
        <Button
          className={styles.addButton}
          component={Link}
          to={`${match.path}add`}
          variant="fab"
          color="secondary"
          aria-label="add"
        >
          <AddIcon />
        </Button>
        <AddedSnackbar
          open={snackbar.type === ADD_SOURCE_SUCCEEDED}
          source={snackbar.payload}
          onClose={onSnackbarClose}
        />
        <RefreshedSnackbar
          open={snackbar.type === REFRESH_SOURCE_SUCCEEDED}
          source={snackbar.payload}
          onClose={onSnackbarClose}
        />
        <DeletedSnackbar
          open={snackbar.type === SOURCE_DELETED}
          source={snackbar.payload}
          onUndo={onDeleteUndo}
          onClose={onSnackbarClose}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    sources: sourcesSelector(state),
    snackbar: snackbarSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRefresh(source) {
      return dispatch(refreshSourceRequested(source));
    },
    onDelete(source) {
      return dispatch(sourceDeleted(source));
    },
    onDeleteUndo(source) {
      return dispatch(sourceDeletedUndone(source));
    },
    onSnackbarClose() {
      return dispatch(snackbarClosed());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sources);
