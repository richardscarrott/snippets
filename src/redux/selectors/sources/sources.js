import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';
import { sourceListSchema } from '../../../api/fetch-source/fetch-source';

const entitiesSelector = state => state.entities;

const sourcesMetaSelector = state => state.sources.meta;

const sourcesDataSelector = state => state.sources.data;

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
