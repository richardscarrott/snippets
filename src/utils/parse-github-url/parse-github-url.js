import parse from 'parse-github-url';
import trimEnd from 'lodash.trimend';

const PUBLIC_GITHUB_HOST = 'github.com';

const getGithubApi = (protocol, host) => {
  if (!protocol || !host) {
    return null;
  }
  return host === PUBLIC_GITHUB_HOST
    ? `${protocol}//api.${host}`
    : `${protocol}//${host}/api/v3/`;
};

export const parseGitHubUrl = url => {
  if (typeof url !== 'string') {
    throw new Error('Expected `url` to be of type `string`');
  }
  const { owner, name: repo, protocol, branch, pathname, host } =
    parse(url) || {};
  const path = (pathname || '').split(branch)[1];
  // NOTE: Having to normalize some of the values as certain inputs return undefined instead of null.
  return {
    api: getGithubApi(protocol, host),
    owner: owner || null,
    repo: repo || null,
    branch: branch || null,
    path: path ? trimEnd(path, '/') : null
  };
};
