import 'typeface-roboto';
import React from 'react';
import Header from './header/header';
import Sources from './sources/sources';
import { CssBaseline } from 'material-ui';
import { Route, Switch } from 'react-router-dom';
import styles from './app.css';

// TODO: Move these to respective reducers?
// const entitiesSelector = state => state.entities;

// const entitiesSourcesSelector = createSelector(
//   entitiesSelector,
//   entities => entities.sources
// );

// const entitiesDirsSelector = createSelector(
//   entitiesSelector,
//   entities => entities.dirs
// );

// const entitiesFilesSelector = createSelector(
//   entitiesSelector,
//   entities => entities.files
// );

// const sourcesSelector = state => state.sources;

const App = () => (
  <div className={styles.root}>
    <CssBaseline />
    <Header />
    <Switch>
      <Route path="/" component={Sources} />
    </Switch>
  </div>
);

export default App;
