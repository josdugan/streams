import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchStream, editStream } from '../../actions';
import StreamForm from '../StreamForm';
import { withParams } from '../hoc/react-router-hooks-adapter';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.params.id, formValues);
  };

  render() {
    console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.params.id] };
};

export default withParams(
  connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)
);
