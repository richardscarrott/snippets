import React, { Component } from 'react';
import Button from 'material-ui/Button';
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import { reduxForm, Fields } from 'redux-form';
import { composeValidators, combineValidators, isRequired } from 'revalidate';
import { LinearProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import ReduxFormTextField from '../../../lib/redux-form-text-field/redux-form-text-field';
import GithubAccessTokenHelperText from './github-access-token-helper-text/github-access-token-helper-text';

class SourceForm extends Component {
  componentWillReceiveProps(nextProps) {
    if (
      this.props.status === this.props.pendingStatus &&
      nextProps.status === 'SUCCESS'
    ) {
      // TODO: Move this to redux-saga?
      nextProps.onClose();
    }
  }

  render() {
    const {
      onClose,
      url,
      name,
      api,
      accessToken,
      owner,
      repo,
      path,
      handleSubmit,
      status,
      pendingStatus
    } = this.props;
    return (
      <form onSubmit={handleSubmit} noValidate>
        {status === pendingStatus ? <LinearProgress /> : null}
        <DialogTitle id="form-add-source">Add Source</DialogTitle>
        <DialogContent>
          {status === 'ERROR' ? (
            <DialogContentText>
              {/* TODO: When upgrading to final mui 1.0.0 gutterBottom and color props should work directly on the DialogContentText */}
              <Typography
                gutterBottom
                color="error"
                component="span"
                variant="subheading"
              >
                Sorry something went wrong.<br />
              </Typography>
              <Typography
                gutterBottom
                color="error"
                component="span"
                variant="subheading"
              >
                {/* TODO: Pass the error response with the link */}
                Having trouble adding a source? Feel free to raise an issue{' '}
                <a href="https://github.com/richardscarrott/snippets/issues">
                  here
                </a>
              </Typography>
            </DialogContentText>
          ) : null}
          <DialogContentText>
            To add snippets to the context menu, configure a GitHub source.
          </DialogContentText>
          <ReduxFormTextField
            {...name.input}
            meta={name.meta}
            autoFocus
            margin="dense"
            id="name"
            label="Name *"
            placeholder="This will show up in the context menu"
            type="text"
            fullWidth
          />
          <ReduxFormTextField
            {...url.input}
            meta={url.meta}
            margin="dense"
            id="GitHub URL"
            label="GitHub URL *"
            placeholder="e.g. https://github.com/bgrins/devtools-snippets/tree/master/snippets"
            type="text"
            fullWidth
          />
          {/*<ReduxFormTextField
            {...api.input}
            meta={api.meta}
            margin="dense"
            id="api"
            label="Github API *"
            type="url"
            placeholder="e.g. https://api.github.com"
            fullWidth
          />*/}
          <ReduxFormTextField
            {...accessToken.input}
            meta={accessToken.meta}
            margin="dense"
            id="accessToken"
            label="GitHub Access Token *"
            type="text"
            helperText={<GithubAccessTokenHelperText />}
            fullWidth
          />
          {/*<ReduxFormTextField
            {...owner.input}
            meta={owner.meta}
            margin="dense"
            id="owner"
            label="Owner *"
            type="text"
            helperText="Given https://github.com/facebook/react, the owner would be 'facebook'"
            fullWidth
          />
          <ReduxFormTextField
            {...repo.input}
            meta={repo.meta}
            margin="dense"
            id="repo"
            label="Repo *"
            type="text"
            helperText="Given https://github.com/facebook/react, the repo would be 'react'"
            fullWidth
          />
          <ReduxFormTextField
            {...path.input}
            meta={path.meta}
            margin="dense"
            id="path"
            label="Path"
            type="text"
            placeholder="e.g. src/snippets"
            helperText="Given https://github.com/facebook/react/tree/master/src/snippets, the path would be 'src/snippets', default to root"
            fullWidth
          />*/}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" variant="raised" color="primary">
            Add
          </Button>
        </DialogActions>
      </form>
    );
  }
}

const validate = combineValidators({
  url: composeValidators(isRequired)('Url'), // TODO: parse it, then validate each part.
  name: composeValidators(isRequired)('Name'),
  // api: composeValidators(isRequired)('GitHub API'),
  accessToken: composeValidators(isRequired)('GitHub Access Token') // Could make this optional?
  // owner: composeValidators(isRequired)('Owner'),
  // repo: composeValidators(isRequired)('Repo')
});

export default reduxForm({
  validate,
  initialValues: {
    api: 'https://api.github.com'
  }
})(props => {
  return (
    <Fields
      {...props}
      names={['name', 'url', 'accessToken']}
      component={SourceForm}
    />
  );
});
