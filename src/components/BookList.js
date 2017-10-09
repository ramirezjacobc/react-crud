import React from 'react';
import BookItem from './BookItem';

export default function BookList({ books }) {
  const emptyMessage = (
    <p>There are no books yet</p>
  );

  const bookList = (
    <div className="container">
      <table className="table is-striped is-fullwidth">
        <thead>
          <th>Name</th>
          <th>Author</th>
          <th>User</th>
          <th>Published date</th>
          <th>Categories</th>
          <th>Status</th>
        </thead>
        <tbody>
          { books.map(book => <BookItem book={book} key={book.id} />)}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="container">
      { books.length === 0 ? emptyMessage : bookList }
    </div>
  )
}
