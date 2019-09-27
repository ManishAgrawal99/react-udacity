import React, { Component } from 'react';
import BookSection from './BookSection';

class SearchBooks extends Component {

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }

    clearQuery = () => {
        this.updateQuery('')
    }

    state = {
        query: ''
    }

    render() {

        const { query } = this.state;
        const { books, onChangeShelf } = this.props;

        const showingBooks = query === ''
            ? books
            : books.filter((b) => (
                b.title.toLowerCase().includes(query.toLowerCase())
            ))

        return (
            <div className='container'>
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search Contacts'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
                <BookSection secHead='Books' books={showingBooks}
                    onChangeShelf={(book, shelf) => { onChangeShelf(book, shelf) }}
                />
            </div>
        )
    }
}

export default SearchBooks;