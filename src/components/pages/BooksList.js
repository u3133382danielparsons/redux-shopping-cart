"use strict"
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBooks } from '../../actions/BooksActions'
import BookItem from './BookItem'
import BooksForm from './BooksForm'
import Cart from './Cart'

import { Grid, Col, Row, Button } from 'react-bootstrap'

class BooksList extends React.Component {
  componentDidMount(){
    // Dispatch an action
    this.props.getBooks()
  }
  render(){
    const booksList = this.props.books.map(function(booksArr){
      return(
        <Col xs={12} sm={6} md={4} key={booksArr._id}>
          <BookItem
            _id={booksArr._id}
            title={booksArr.title}
            description={booksArr.description}
            price={booksArr.price}
          />
        </Col>
      )
    })
    return(
      <Grid>
        <Row>
          <Cart />
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <BooksForm />
          </Col>
          {booksList}
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books.books
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getBooks: getBooks
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
