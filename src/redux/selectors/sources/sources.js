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

// const flatten = arr => [].concat.apply([], arr);
const flatten = arr => {
  console.log('fltten', arr);
  return [].concat.apply([], arr);
};

const isDir = content => Array.isArray(content.content);
const isFile = content => !isDir(content);

const contentToFiles = (content, path, files) => {
  if (isFile(content)) {
    files = files.concat([
      {
        id: content.id,
        name: content.name,
        path: `${path}/${content.name}`
      }
    ]);
    return files;
  }
  content.content.forEach(c => {
    // This isn't v. functional as it changes reference to mutates...could
    // perhaps
    files = contentToFiles(
      c,
      path ? `${path}/${content.name}` : content.name,
      files
    );
  });
  return files;
};

// TODO: Rename to fileTargetsSelector?
export const filesSelector = createSelector(sourcesSelector, sources => {
  // Tthis `source` is what the data will be like, i.e. source will have an array of content, always.
  const source = {
    ...sources[0],
    content: [sources[0].content]
  };
  // console.log(source, '<--');
  return contentToFiles(source, null, []);
  // return sources.reduce((files, source) => {
  //   // TODO: This will be less weird once work on supporting files has been done.
  //   return files.concat(contentToFiles(source.content, source.name));
  // }, []);
});
