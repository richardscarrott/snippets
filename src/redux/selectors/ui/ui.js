import { createSelector } from 'reselect';

const uiSelector = state => state.ui;

export const snackbarSelector = createSelector(uiSelector, ui => ui.snackbar);
