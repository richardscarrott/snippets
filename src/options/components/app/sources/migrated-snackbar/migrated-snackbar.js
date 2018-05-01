import React from 'react';
import SnackBar from 'material-ui/Snackbar';
import Button from 'material-ui/Button';

const MigratedSnackBar = ({ payload, onClose, ...rest }) => (
  <SnackBar
    {...rest}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left'
    }}
    onClose={onClose}
    message={payload && payload.message}
    action={[
      <Button key="close" color="secondary" size="small" onClick={onClose}>
        Dismiss
      </Button>
    ]}
  />
);

export default MigratedSnackBar;
