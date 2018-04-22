import React, { Fragment } from 'react';

const GithubAccessTokenHelperText = () => (
  <Fragment>
    <a
      href="https://github.com/settings/tokens/new?scopes=public_repo&description=Snippets%20Chrome%20Extension"
      target="_blank"
    >
      Create a token
    </a>
  </Fragment>
);

export default GithubAccessTokenHelperText;
