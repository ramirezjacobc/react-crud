import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../actions/index';

class Modal extends Component {
  render() {
    return (
      <div className={this.props.modal ? "modal is-active" : "modal"}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <p>body {this.props.modal}</p>
        </div>
        <button
          className="modal-close is-large"
          onClick={() => this.props.hideModal() }></button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    modal: state.books.modal
  }
}

export default connect(mapStateToProps, { hideModal })(Modal);
