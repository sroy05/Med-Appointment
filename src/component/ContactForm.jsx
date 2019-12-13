import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';
import { statement } from '@babel/template';
import DateTimePicker from 'react-datetime-picker';

//redux-form tutorial https://redux-form.com/6.6.1/docs/gettingstarted.md/
const validate = (values) => {
  const errors = {};
  if( !values.firstName) {
    errors.firstName = {
      message: 'You need to provide  First Name'
    }
  }
  if( !values.lastName) {
    errors.lastName = {
      message: 'You need to provide  Last Name'
    }
  }
  if(!values.phone) {
    errors.phone = {
      message: 'You need to provide a Phone number'
    }
  } else if(!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(values.phone)) {
    errors.phone = {
      message: 'Phone number must be in International format'
    }
  }
  if(!values.email) {
    errors.email = {
      message: 'You need to provide an Email address'
    }
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = {
      message: 'Invalid email address'
    }
  }
  return errors;
}
const Speciality =["Women's health","Child Specialist","Skin and Hair","General Physician","Heart Specialist","Mental Wellness","Eye Specialist"]
const childSpecialists=["Dr Reshma","Dr Mallik","Dr Arjun"];
const Dentists=["Dr Banerjee","Dr Siresha","Dr kaushik"];
class ContactForm extends Component {


state={
  isShowable:false,
  doctors:[],
  dateAndTime:'',
  price:''
}

HandlerOnSelect=(e)=>{
console.log("value;",e.target.value);
switch(e.target.value){
  case "Women's health":
    return this.setState({
      isShowable:true,
      doctors:childSpecialists.slice()
    })
  case "Child Specialist":
      return this.setState({
          isShowable:true,
          doctors:Dentists.slice()
    })

  }
}
    
renderField = ({ input, label, type, meta: { touched, error } }) => (
        <Form.Field className={classnames({error:touched && error})}>
          <label>{label}</label>
          <input {...input} placeholder={label} type={type}/>
          {touched && error && <span className="error">{error.message}</span>}
        </Form.Field>
      )
 renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
      <DateTimePicker
        onChange={onChange}
        format="DD MMM YYYY"
        time={showTime}
        value={!value ? null : new Date(value)}
      />
      componentWillReceiveProps = (nextProps) => { // Receive Contact data Asynchronously
        const { contact } = nextProps;
        if(contact.id !== this.props.contact.id) { // Initialize form only once
          this.props.initialize(contact)
        }
      }

  render() {

    const {handleSubmit,pristine,submitting,loading} =this.props;

    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>Book Appointment</h1>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Form.Group widths='equal'>
              <Field name="firstName" type="text" component={this.renderField} label="First Name"/>
              <Field name="lastName" type="text" component={this.renderField} label="Last Name"/>
            </Form.Group>
            <Field name="phone" type="text" component={this.renderField} label="Phone"/>
            <Field name="email" type="text" component={this.renderField} label="Email"/>
            <div>
 
      </div>
        <div>
        <label>Select  Speciality</label>
        </div>
            <div>
              <Field name="Select Speciality " component="select"  label="Select Spciality" onChange={this.HandlerOnSelect} placeholder='Select Special'>
              {Speciality.map((special) => <option key={special.id}>{special}</option>)}
              </Field>
            </div>
              <br>
              </br>
            {this.state.isShowable ?<div><div>Select Doctor</div>
              <Field name="Select Doctor " component="select"  label="Select Doctor" onChange={this.HandlerOnSelect}>
              {this.state.doctors.map((doctor) => <option key={doctor.id}>{doctor}</option>)}
              </Field>
            </div>:<div></div> }
              <p><p></p></p><br></br>
              <Field
          name="dob"
          showTime={true}
          component={this.renderDateTimePicker}
        />
       
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'contact',validate})(ContactForm);