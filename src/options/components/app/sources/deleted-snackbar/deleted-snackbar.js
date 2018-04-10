import React from 'react';
import SnackBar from 'material-ui/Snackbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

const DeletedSnackBar = ({ source, onClose, onUndo, ...rest }) => (
  <SnackBar
    {...rest}
    onClose={onClose}
    message={source && `Deleted '${source.name}'`}
    autoHideDuration={6000}
    action={[
      <Button
        key="undo"
        color="secondary"
        size="small"
        onClick={() => onUndo(source)}
      >
        Undo
      </Button>,
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

export default DeletedSnackBar;
