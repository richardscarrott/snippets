import React from 'react';
import SnackBar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

const RefreshedSnackBar = ({ source, onClose, ...rest }) => (
  <SnackBar
    {...rest}
    onClose={onClose}
    message={source && `Refreshed '${source.name}'`}
    autoHideDuration={4000}
    action={[
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
    ]}
  />
);

export default RefreshedSnackBar;
