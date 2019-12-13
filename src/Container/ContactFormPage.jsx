import React, { Component} from 'react';
import ContactForm from '../component/ContactForm';
import {newContact,saveContact,fetchContact,updateContact} from '../actions/Actions';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class ContactFormPage extends Component {

  state = {
    redirect: false
  }

  componentDidMount() {
  
    const _id = this.props.match.params;
    if(_id)
    this.props.fetchContact(_id)
    else
    this.props.newContact();
  }

  submit = (contact) => {
    if(!contact.id){
      const obj= this.props.saveContact(contact)

      if(obj!==null){
        this.setState({redirect:true})
      } else{
      new SubmissionError(this.props.errors)
      }
    }
    else{
      const obj= this.props.updateContact(contact)

      if(obj!==null){
        this.setState({redirect:true})
      } else{
      new SubmissionError(this.props.errors)
      }
    }
    
  } 

  render() {
    console.log(this.state);
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/" /> :
          <ContactForm contact={this.props.contact} loading={this.props.loading} onSubmit={this.submit} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contactStore.contact,
    errors: state.contactStore.errors
  }
}

export default connect(mapStateToProps, {newContact, saveContact,fetchContact,updateContact})(ContactFormPage);