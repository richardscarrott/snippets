import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';
import {
  sourceListSchema,
  endpoint
} from '../../../api/fetch-source/fetch-source';

export const entitiesSelector = state => state.entities;

export const sourcesMetaSelector = state => state.sources.meta;

export const sourcesDataSelector = state => state.sources.data;

export const getDescription = ({ api, owner, repo, path }) => {
  const displayPath = `${owner}/${repo}/${path}`.replace(/([^:]\/)\/+/g, '$1');
  return new URL(displayPath, api).href;
};

export const sourcesSelector = createSelector(
  sourcesDataSelector,
  sourcesMetaSelector,
  entitiesSelector,
  (sourcesData, sourcesMeta, entities) => {
    return denormalize(sourcesData, sourceListSchema, entities)
      .map(source => ({
        ...source,
        meta: sourcesMeta[source.id],
        description: getDescription(source)
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
