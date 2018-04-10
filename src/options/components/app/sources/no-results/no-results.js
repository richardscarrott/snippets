import React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import styles from './no-results.css';

const NoResults = ({ match, ...rest }) => (
  <Grid container direction="column" alignItems="center" {...rest}>
    <Grid item component={Typography} className={styles.message}>
      Looks like you haven't added any sources yet?
    </Grid>
    <Grid item>
      <Button component={Link} to={`${match.path}add`} variant="raised">
        Add source
      </Button>
    </Grid>
  </Grid>
);

export default NoResults;
