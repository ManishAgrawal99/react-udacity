import React from 'react';
import PropTypes from 'prop-types'

function ListContacts(props) {
    return (
        <ol className='contact-list'>
            {
                props.contacts.map((contact) => (
                    <li key={contact.id} className="contact-list-item">
                        <div
                            className="contact-avatar"
                            style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}>
                        </div>
                        <div className="contact-details">
                            <p>{contact.name}</p>
                            <p>@{contact.handle}</p>
                        </div>
                        <button
                            onClick = {()=>props.onDeleteContact(contact)} 
                            className="contact-remove"
                        >

                        </button>
                    </li>
                ))
            }
        </ol>
    )
}

export default ListContacts;
