// TODO: Move to redux/utils.

import parse from 'parse-github-url';
import trimEnd from 'lodash.trimend';

const PUBLIC_GITHUB_HOST = 'github.com';

const getGithubApi = (protocol, host) => {
  return host === PUBLIC_GITHUB_HOST
    ? `${protocol}//api.${host}`
    : `${protocol}//${host}/api/v3/`;
};

export const parseGithubUrl = url => {
  const { owner, name: repo, protocol, branch, pathname, host } =
    parse(url) || {};
  const path = trimEnd((pathname || '').split(branch)[1] || '', '/');
  return {
    api: getGithubApi(protocol, host),
    owner,
    repo,
    branch,
    path
  };
};
