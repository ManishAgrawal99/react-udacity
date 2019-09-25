import React, { Component } from 'react';
import './utils/bootstrap.css'
import './App.css';

import * as BooksAPI from './BooksAPI'

import BookSection from './BookSection';

class App extends Component {

    state = {
        books: []
    }

    componentDidMount(){
        BooksAPI.getAll()
        .then((books)=>{
            this.setState(()=>({
                books
            }))
        })
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row text-center">
                        <h1>My Reads</h1>
                    </div>
                    <BookSection secHead='Currently Reading' books={this.state.books} />
                    <BookSection secHead='Want to Read' books={this.state.books} />
                    <BookSection secHead='Read' books={this.state.books} />
                </div>
            </div>
        );
    }
}

export default App;
