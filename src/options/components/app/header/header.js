import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit">
        Snippets
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
