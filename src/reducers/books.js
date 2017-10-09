import { SET_BOOKS, ADD_BOOK, SHOW_MODAL, HIDE_MODAL } from '../actions';

const initialState = {
  allBooks: [],
  modal: false
}

export default function books(state = initialState, action) {
  switch (action.type) {
    case SET_BOOKS:
      return Object.assign({}, state, {
        allBooks: action.payload
      });
    case ADD_BOOK:
      return Object.assign({}, state, {
        allBooks: [...state.allBooks, {...action.payload}]
      });
    case SHOW_MODAL:
      return Object.assign({}, state, {
        modal: true
      });
    case HIDE_MODAL:
      return Object.assign({}, state, {
        modal: false
      })
    default:
      return state
  }
}
