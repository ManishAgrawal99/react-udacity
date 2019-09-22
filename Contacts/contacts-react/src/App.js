import React, { Component } from 'react';

import * as ContactsAPI from './utils/ContactsAPI';

//Importing Components
import ListContacts from './ListContacts';
import CreateContact from './CreateContacts';

class App extends Component {

    state = {
        contacts: [],
        screen: 'list'
    }

    componentDidMount() {
        ContactsAPI.getAll()
            .then((contacts) => {
                this.setState(() => ({
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

        ContactsAPI.remove(contact)
    }

    addContact = ()=>{
        this.setState((currentState)=>({
            screen: 'create'
        }))
    }

    render() {
        return (
            <div>
                {this.state.screen === 'list' &&
                    (<ListContacts
                        contacts={this.state.contacts}
                        onDeleteContact={this.removeContact}
                        onCreateContact={this.addContact}
                    />)}
                {this.state.screen === 'create' && <CreateContact />}
            </div>
        );
    }
}

export default App;
