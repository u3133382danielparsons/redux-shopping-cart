"use strict"
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import reducers from './reducers/index'
import {addToCart} from './actions/CartActions'
import {postBooks, deleteBooks, updateBooks} from './actions/BooksActions'
import BooksList from './components/pages/BooksList'
// STEP 1 create the store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware)

render(
  <Provider store={store}>
    <BooksList />
  </Provider>, document.getElementById('app')
)
// STEP 2 create and dispatch actions
// store.dispatch(postBooks(
//
// ))

// // DELETE A BOOK
// store.dispatch(deleteBooks(
//   {id: 1}
// ))
//
// // UPDATE a book
// store.dispatch(updateBooks(
//   {
//     id: 2,
//     title: 'Learn React in 24h'
//   }
// ))
//
// // CART ACTIONS
// // Add to cart
// store.dispatch(addToCart([{id: 1}]))
