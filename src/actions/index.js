export const SET_BOOKS = 'SET_BOOKS';
export const ADD_BOOK = 'ADD_BOOK';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export function setBooks(books) {
  return {
    type: SET_BOOKS,
    payload: books
  }
}

export function addBook(book) {
  return {
    type: ADD_BOOK,
    payload: book
  }
}

export function showModal() {
  return {
    type: SHOW_MODAL
  }
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  }
}

export function syncBooks() {
  return dispatch => {
    dispatch(setBooks(data));
  }
}

const data = [
  {
    id: 1,
    name: "Book 1",
    author: "Author 1",
    categories: [
      {
        id: 1,
        name: "Category 1",
        description: "Description 1"
      },
      {
        id: 2,
        name: "Category 2",
        description: "Description 2"
      }
    ],
    published_date: '22-10-2017',
    user: "User 1",
    available: true
  },
  {
    id: 2,
    name: "Book 2",
    author: "Author 2",
    categories: [
      {
        id: 1,
        name: "Category 1",
        description: "Description 1"
      },
      {
        id: 2,
        name: "Category 2",
        description: "Description 2"
      }
    ],
    published_date: '22-10-2017',
    user: "User 2",
    available: false
  }
]
