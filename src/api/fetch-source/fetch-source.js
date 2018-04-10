import { normalize, schema } from 'normalizr';
import { murmur2 } from 'murmurhash-js';
import uuid from 'uuid/v1';

const endpoint = (api, owner, repo, path) =>
  `${api}/repos/${owner}/${repo}/contents/${path}`;

const fetchContents = async (name, id, api, accessToken, owner, repo, path) => {
  const response = await window.fetch(endpoint(api, owner, repo, path), {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${accessToken}`
    }
  });
  // TODO: Better error handling.
  const contents = await response.json();
  if (Array.isArray(contents)) {
    return {
      id,
      name: name,
      content: await Promise.all(
        contents.map(content =>
          fetchContents(
            content.name,
            content.sha,
            api,
            accessToken,
            owner,
            repo,
            content.path
          )
        )
      )
    };
  } else if (contents.type === 'file') {
    return {
      id: contents.sha,
      name: contents.name,
      content: contents.content
    };
  }
  throw new Error(`contents type not supported: '${contents.type}'`);
};

const fileSchema = new schema.Entity('files');
const dirSchema = new schema.Entity('dirs');
const contentSchema = new schema.Union(
  {
    files: fileSchema,
    dirs: dirSchema
  },
  input => (Array.isArray(input.content) ? 'dirs' : 'files')
);
dirSchema.define({
  content: [contentSchema]
});
const sourceSchema = new schema.Entity('sources', {
  content: contentSchema
});
export const sourceListSchema = new schema.Array(sourceSchema);

const fetchSource = async request => {
  const contents = await fetchContents(
    request.name,
    // NOTE: Github contents api doesn't return the `sha` of
    // dir at `path`, so having to generate a unique id in client.
    uuid(),
    request.api,
    request.accessToken,
    request.owner,
    request.repo,
    request.path
  );
  const source = {
    id: request.id,
    name: request.name,
    api: request.api,
    accessToken: request.accessToken,
    owner: request.owner,
    repo: request.repo,
    path: request.path,
    content: contents
  };
  const normalizedSource = normalize([source], sourceListSchema);
  return normalizedSource;
};

export default fetchSource;
