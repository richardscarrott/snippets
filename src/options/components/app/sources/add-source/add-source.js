import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v1';
import {
  addSourceRequested,
  addSourceCancelled
} from '../../../../../redux/actions/add-source/add-source';
import SourceForm from '../source-form/source-form';
import {
  sourceStatusSelector,
  sourceSelector
} from '../../../../../redux/selectors/sources/sources';

class AddSource extends Component {
  render() {
    const { open, onClose, onSubmit, status, onSuccess, source } = this.props;
    return (
      <SourceForm
        form="addSource"
        status={status}
        pendingStatus="CREATING"
        onSubmit={onSubmit}
        onClose={onClose}
        onSuccess={onSuccess}
        source={source}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  status: sourceStatusSelector(state, ownProps),
  source: sourceSelector(state, ownProps)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClose() {
      dispatch(addSourceCancelled(ownProps.id));
      ownProps.onClose();
    },
    onSubmit: formValues => {
      dispatch(
        addSourceRequested({
          ...formValues,
          id: ownProps.id
        })
      );
    }
  };
};

const ConnectedAddSource = connect(mapStateToProps, mapDispatchToProps)(
  AddSource
);

export default class ConnectedAddSourceWithId extends Component {
  constructor(props) {
    super(props);
    // NOTE: It might be nicer to have this in the url...
    this.state = {
      id: uuid()
    };
  }

  render() {
    return <ConnectedAddSource {...this.props} id={this.state.id} />;
  }
}
