export const MIGRATED = 'MIGRATED';

export const migrations = {
  1: () => {
    return {
      ui: {
        snackbar: {
          type: MIGRATED,
          payload: {
            message:
              "Unfortunately we've had to delete your existing sources due to breaking changes in the latest version of Snippets. On a more positive note, adding them back should be much simpler with the latest updates. #Sorry #Beta"
          }
        }
      }
    };
  },
  2: state => {
    return {
      ...state,
      entities: {
        ...state.entities,
        sources: Object.entries(
          state.entities.sources
        ).reduce((sources, [id, source]) => {
          sources[id] = {
            ...source,
            // Now Source extend Dir we need to reparent the dir to avoid unnecesary nesting
            // e.g. source (MySnippets) -> dir (snippets) -> file (snippet.js)
            // becomes source (MySnippets) -> file (snippet.js)
            content:
              source.content.schema === 'dirs'
                ? state.entities.dirs[source.content.id].content
                : [source.content]
          };
          return sources;
        }, {})
      }
    };
  }
};
