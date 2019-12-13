import React, { Component} from 'react';
import ContactList from '../component/ContactList';
import {connect} from 'react-redux';
import { fetchContacts,deleteContact } from '../actions/Actions';


class ContactListPage extends Component {

componentDidMount(){
   return  this.props.fetchContacts()
   .then ((response)=>console.log(response.data))
   .catch((err)=>console.log(err));
}


  render() {
    return (
      <div>
        <h1>List of Contacts</h1>
        <ContactList contacts={this.props.contactState} deleteContact={this.props.deleteContact}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        contactState : state.contactStore.contacts
    }
  }


export default connect(mapStateToProps,{fetchContacts,deleteContact})(ContactListPage);