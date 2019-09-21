import React, { Component } from 'react';

import * as ContactsAPI from './utils/ContactsAPI';

//Importing Components
import ListContacts from './ListContacts';


class App extends Component {

    state = {
        contacts: []
    }

    componentDidMount(){
        ContactsAPI.getAll()
        .then((contacts)=>{
            this.setState(()=>({
                contacts
            }))
        })
    }


    removeContact = (contact) => {
        this.setState((currentState) => ({
            contacts: currentState.contacts.filter((c) => {
                return c.id !== contact.id;
            })
        }))
    }

    render() {
        return (
            <div>
                <ListContacts
                    contacts = {this.state.contacts} 
                    onDeleteContact = {this.removeContact}    
                />
            </div>
        );
    }
}

export default App;
