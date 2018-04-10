import React, { Fragment } from 'react';

const GithubAccessTokenHelperText = () => (
  <Fragment>
    <a
      href="https://github.com/settings/tokens/new?scopes=notifications&amp;description=Github Snippets Extension"
      target="_blank"
    >
      Create a token
    </a>{' '}
    (TODO: Determine which permissions are required).
  </Fragment>
);

export default GithubAccessTokenHelperText;
