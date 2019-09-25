import React, { Component } from 'react';
import './utils/bootstrap.css'
import './App.css';

import * as BooksAPI from './BooksAPI'

import BookSection from './BookSection';

class App extends Component {

    state = {
        books: [],
        curr: [],
        want: [],
        read: []
    }

    changeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf)
            .then(() => {
                BooksAPI.getAll()
                    .then((books) => {
                        this.categorizeBooks(books);
                        this.setState(() => ({
                            books
                        }));
                    })
            })
    }

    categorizeBooks = (books) => {
        this.state.curr=[];
        this.state.want=[];
        this.state.read=[];
        
        for (const book of books) {
            if (book.shelf === 'currentlyReading') {
                this.state.curr.push(book);
            }
            else if (book.shelf === 'wantToRead') {
                this.state.want.push(book);
            }
            else if (book.shelf === 'read') {
                this.state.read.push(book);
            }
        }
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.categorizeBooks(books);
                this.setState(() => ({
                    books
                }));
            })
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row text-center">
                        <h1>My Reads</h1>
                    </div>
                    <BookSection secHead='Currently Reading' books={this.state.curr}
                        onChangeShelf={(book, shelf) => { this.changeShelf(book, shelf) }}
                    />
                    <BookSection secHead='Want to Read' books={this.state.want}
                        onChangeShelf={(book, shelf) => { this.changeShelf(book, shelf) }}
                    />
                    <BookSection secHead='Read' books={this.state.read}
                        onChangeShelf={(book, shelf) => { this.changeShelf(book, shelf) }}
                    />
                </div>
            </div>
        );
    }
}

export default App;
