
import { client } from './';
export const FETCH_CONTACTS='FETCH_CONTACTS';


const url_fetchContact='/instructors/courses';
const url_addContact='/instructor/courses/add';
const url='/instructor/course';

  export  function fetchContacts(){
    return dispatch => {
      return new Promise(function(resolve,reject){
        dispatch({
          type: 'FETCH_CONTACTS',
          payload: client.get(url_fetchContact)
        })
    })
     
    }
  }

  export function newContact(){
      return dispatch =>{
          dispatch({
              type:'NEW_CONTACT'
          })
      }
  }

  export function saveContact(datas){
    return dispatch=>{
      return new Promise(function(resolve,reject){
        dispatch({
          type:'SAVE_CONTACT',
          payload:client.post(url_addContact,datas)
      })
      }).then((resolve)=>console.log('Added successfully',resolve.data))
      .catch((err,resolve)=>{
        resolve({status:err.response.status,message:err.response.data.message})
      })
        
    }
  }


  export function fetchContact(_id){
    const  id=parseInt(_id,10);
    console.log('id value:',_id._id)
    console.log("getting id:",`${url}/${_id._id}`);
    return dispatch =>{
      return new Promise(function(resolve,reject){
        dispatch({
          type:'FETCH_CONTACT',
          payload:client.get(`${url}/${_id._id}`)
        })
      }).then((resolve)=>console.log('updated successfully',resolve.data))
      .catch((err,resolve)=>{
        resolve({status:err.response.status,message:err.response.data.message})
      })
    }
  }
  export function updateContact(datas){
    return dispatch=>{
      return new Promise(function(resolve,reject){
        dispatch({
          type:'UPDATE_CONTACT',
          payload:client.put(`${url_fetchContact}/${datas.id}`,datas)
      })
      }).then((resolve)=>console.log('updated successfully',resolve.data))
      .catch((err,resolve)=>{
        resolve({status:err.response.status,message:err.response.data.message})
      })
        
    }
  }

  export function deleteContact(_id){
    console.log("delete:",`${url_fetchContact}/${_id}`)
    return dispatch=>{
      return new Promise(function(resolve,reject){
        dispatch({
          type:'DELETE_CONTACT',
          payload:client.get(`${url_fetchContact}/${_id}`)
      })
      }).then((resolve)=>console.log('deleted successfully',resolve.data))
     
        
    }
  }