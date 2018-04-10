import React from 'react';
import TextField from 'material-ui/TextField';

const ReduxFormTextField = ({ meta, ...rest }) => {
  const hasError = meta.error && meta.touched;
  return (
    <TextField
      {...rest}
      error={hasError}
      helperText={hasError ? meta.error : rest.helperText}
    />
  );
};

export default ReduxFormTextField;
