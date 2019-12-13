import React from 'react';
import ContactCard  from './contact-card';

export default function ContactList({contacts,deleteContact}){
  
const contactArray=contacts;
const arrayToObject = (array) =>
   array.reduce((obj, item) => {
     obj[item.id] = item
     return obj
   }, {})
   const peopleObject = arrayToObject(contacts)
const list=()=>{
 
    return contacts.map((contact)=>

    <ContactCard key={contact.id} contact={peopleObject[contact.id]} deleteContact={deleteContact}/>

  )
}

  return (
    <div>
      <li >
        {list()}
      </li>
    </div>
  )
}

