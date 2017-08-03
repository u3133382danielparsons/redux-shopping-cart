"use strict"
import { combineReducers } from 'redux'
import {booksReducers} from './BooksReducers'
import {cartReducers} from './CartReducers'
// HERE COMBINE THE REDUCERS
export default combineReducers({
  books: booksReducers,
  cart: cartReducers
})
