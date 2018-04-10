import React, { Fragment } from 'react';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Source from './source/source';

const SourceList = ({ sources, onDelete, onRefresh, ...rest }) => (
  <List {...rest}>
    {sources.map((source, i) => (
      <Fragment key={source.id}>
        <Source
          {...source}
          onDelete={() => onDelete(source)}
          onRefresh={() => onRefresh(source)}
        />
        {i < sources.length - 1 ? <Divider /> : null}
      </Fragment>
    ))}
  </List>
);

export default SourceList;
