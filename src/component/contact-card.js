import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import  PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ContactCard({contact, deleteContact}) {
  return (
    <Card>
      <Card.Content>    
        <Card.Header>
          <Icon name='user outline'/> {contact.firstName} {contact.lastName}
        </Card.Header>
        <Card.Description>
          <p><Icon name='phone'/> {contact.phone}</p>
          <p><Icon name='mail outline'/> {contact.email}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
        <Link to={`/contacts/edit/${contact.id}`} className="ui basic button green">Edit</Link>
          <Button basic color="red" onClick={()=>deleteContact(contact.id)}>Delete</Button>
        </div>
      </Card.Content>
    </Card>
  )
}

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired
}