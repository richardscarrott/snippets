import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { createValidator } from 'revalidate';
import { parseGitHubUrl } from '../../../../../utils/parse-github-url/parse-github-url';
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
      onSubmit,
      status,
      pendingStatus,
      urlPattern
    } = this.props;
    return (
      <form
        onSubmit={handleSubmit(data => {
          onSubmit(
            Object.entries(data).reduce((normalizedData, [key, value]) => {
              normalizedData[key] = Array.isArray(value) ? value : value.trim();
              return normalizedData;
            }, {})
          );
        })}
        noValidate
      >
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
            id="url"
            label="GitHub URL *"
            type="url"
            fullWidth
            helperText="A GitHub url pointing to a directory containing JavaScript files, e.g. https://github.com/bgrins/devtools-snippets/tree/master/snippets"
          />
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
          <ReduxFormTextField
            {...urlPattern.input}
            meta={urlPattern.meta}
            margin="dense"
            id="urlPattern"
            label="URL Regex Pattern"
            placeholder="[A-z]*.google.com"
            helperText="Optionally run this snippet on tab load if URL mathces the pattern."
            fullWidth
          />
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

const isValidUrl = createValidator(
  message => value => {
    const { api, owner, repo, branch } = parseGitHubUrl(value);
    const error = [api, owner, repo, branch].reduce((acc, val) => {
      if (val === null) {
        return true;
      }
      return acc;
    }, false);
    if (error) {
      return message;
    }
  },
  field => `${field} cannot be parsed`
);

const validate = combineValidators({
  url: composeValidators(isRequired, isValidUrl)('GitHub Url'),
  name: composeValidators(isRequired)('Name'),
  accessToken: composeValidators(isRequired)('GitHub Access Token') // Could make this optional?
});

export default reduxForm({
  validate
})(props => {
  return (
    <Fields
      {...props}
      names={['name', 'url', 'accessToken', 'urlPattern']}
      component={SourceForm}
    />
  );
});
