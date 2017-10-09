import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';
import Breadcrumb from './Breadcrumb';
import Modal from './Modal';
import { syncBooks } from '../actions/index';

class BookPage extends Component {
  componentDidMount() {
    this.props.syncBooks();
  }

  render() {
    console.log(this.props.books);
    return (
      <div>
        <Breadcrumb section=""/>
        <BookList books={this.props.books} />
        <Modal />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.allBooks
  }
}

export default connect(mapStateToProps, { syncBooks })(BookPage);
