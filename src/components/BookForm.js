import React, { Component } from 'react';
import { connect } from 'react-redux';
import Breadcrumb from './Breadcrumb';

class BookForm extends Component {
  render() {
    return (
      <div>
        <Breadcrumb section="New" />
        <h2>Fotm to edit or add books</h2>
      </div>
    )
  }
}

export default BookForm;
