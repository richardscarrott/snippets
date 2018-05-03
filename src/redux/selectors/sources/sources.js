import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';
import { sourceListSchema } from '../../../api/fetch-source/fetch-source';

export const entitiesSelector = state => state.entities;

export const sourcesMetaSelector = state => state.sources.meta;

export const sourcesDataSelector = state => state.sources.data;

export const sourcesSelector = createSelector(
  sourcesDataSelector,
  sourcesMetaSelector,
  entitiesSelector,
  (sourcesData, sourcesMeta, entities) => {
    return denormalize(sourcesData, sourceListSchema, entities)
      .map(source => ({
        ...source,
        meta: sourcesMeta[source.id]
      }))
      .filter(source => !source.meta.deleted);
  }
);

export const sourceStatusSelector = createSelector(
  sourcesMetaSelector,
  (_, props) => props,
  (meta, props) => (meta[props.id] ? meta[props.id].status : 'NONE')
);

export const sourceSelector = createSelector(
  entitiesSelector,
  (_, props) => props,
  (entities, props) => entities.sources[props.id]
);

const flatten = arr => [].concat.apply([], arr);

function flattenDeep(arr) {
  console.log('flattenDeep', arr);
  return arr.reduce(
    (acc, e) => (Array.isArray(e) ? acc.concat(flattenDeep(e)) : acc.concat(e)),
    []
  );
}

const isDir = content => Array.isArray(content.content);
const isFile = content => !isDir(content);

const getFiles = (content, path) => {
  if (isFile(content)) {
    return [
      {
        id: content.id,
        name: content.name,
        path: `${path}/${content.name}`
      }
    ];
  }
  return content.content.reduce(
    (files, childContent) =>
      files.concat(
        getFiles(childContent, path ? `${path}/${content.name}` : content.name)
      ),
    []
  );
};

// TODO: Rename to fileTargetsSelector?
export const filesSelector = createSelector(sourcesSelector, sources => {
  // Tthis `source` is what the data will be like, i.e. source will have an array of content, always.
  const source = {
    ...sources[0],
    content: [sources[0].content]
  };
  return getFiles(source);
});
