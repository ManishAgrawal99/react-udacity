import React, { Component } from 'react';

class BookSection extends Component {
    render() {
        const Books = this.props.books;
        const Head = this.props.secHead;

        return (
            <div className='container'>
                <div className='row'>
                    <h2>{Head}</h2>
                </div>
                <hr></hr>
                <div className='row hori-book-display card-deck'>
                    {
                        Books.map((book) => (
                            <div className='card col-md-3' key={book.title}>
                                <img className='card-img-top' src={book.imageLinks.thumbnail} alt={book.title} />
                                <div className='card-body'>
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text"><small className="text-muted">{book.authors[0]}</small></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div >
        )
    }
}

export default BookSection;