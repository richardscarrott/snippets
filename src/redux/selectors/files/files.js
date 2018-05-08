import { createSelector } from 'reselect';
import { sourcesSelector } from '../sources/sources';

export const filesEntitiesSelector = state => state.entities.files;

const isDir = content => Array.isArray(content.content);

const isFile = content => !isDir(content);

const isFileRenderable = file => file.name.endsWith('.js');

const getFilePaths = (content, path) => {
  if (isFile(content)) {
    return isFileRenderable(content)
      ? [
          {
            id: content.id,
            path: `${path}/${content.name}`
          }
        ]
      : [];
  }
  return content.content.reduce(
    (files, childContent) =>
      files.concat(
        getFilePaths(
          childContent,
          path ? `${path}/${content.name}` : content.name
        )
      ),
    []
  );
};

export const filePathsSelector = createSelector(sourcesSelector, sources =>
  getFilePaths({ content: sources })
);
