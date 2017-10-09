import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../actions/index';

class BookItem extends Component {
  render() {
    return (
      <tr>
        <td>{ this.props.book.name }</td>
        <td>{ this.props.book.author }</td>
        <td>{ this.props.book.user }</td>
        <td>{ this.props.book.published_date }</td>
        <td>
          <ul>
            { this.props.book.categories.map(category =>
              <li key={category.id}>{ category.name }</li>
            )}
          </ul>
        </td>
        <td>
          <button
            className={this.props.book.available ? "button is-primary" : "button is-danger"}
            onClick={() => this.props.showModal() }>
            {  this.props.book.available ? 'Available' : 'Not available' }
          </button>
        </td>
      </tr>
    )
  }
}

export default connect(null, { showModal })(BookItem);
