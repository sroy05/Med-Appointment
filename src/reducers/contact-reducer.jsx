

const defaultState = {
    contacts: [],
    contact:{},
    loading:false,
    error:''
  }
  
  export default (state=defaultState, action={}) => {
      // console.log(action.payload);
      // console.log(action.type);

    switch (action.type) {
      case 'FETCH_CONTACTS_FULFILLED': 
            return {
            ...state,
            contacts: action.payload.data
    }

    case 'NEW_CONTACT': {
        return {
          ...state,
          contact: {}
        }
      }
    case 'SAVE_CONTACT_PENDING':
        return {
            ...state,
            loading:true
        }
        case 'SAVE_CONTACT_FULFILLED':
            return {
                ...state,
                contacts:[...state.contacts,state.contacts.concat(action.payload.data)],
                loading:false,
                error:{}
            }
        case 'SAVE_CONTACTS_REJECTED':
            const data=action.payload.response.data
            const { firstName, lastName, phone, email } = data.errors;
            const errors = { global: data.message, lastName,firstName, phone, email };
            return {
                ...state,
                error:errors,
                loading:false
            }

        case 'FETCH_CONTACT_PENDING' :
          return {
                  ...state,
                  error:{},
                  loading:true
          }


        case 'FETCH_CONTACT_FULFILLED' :
            return {
              ...state,
              contact:action.payload.data,
              error:{},
              loading:false
            }

       case 'UPDATE_CONTACT_PENDING' :
         return {
           ...state,
           contact:{},
           loading:true,
           error:{}
         }
       case 'UPDATE_CONTACT_FULFILLED' :
          const contact = action.payload.data;
         return {
           ...state,
           contacts: state.contacts.map((item)=>item.id===contact.id?contact:item),
           error:{}
         }
         
         case 'UPDATE_CONTACTS_REJECTED':
       
            return {
                ...state,
                error:action.payload.response.data,
                loading:false
            }
        case 'DELETE_CONTACT_PENDING' :
          return {
            ...state,
            loading:false,
            error:{}
          }

        case 'DELETE_CONTACT_FULFILLED' :
          const _id=action.payload.data._id;
          
          return {
            ...state,
            contacts: state.contacts.filter(item=>item._id!==_id)
          }

      default:
        return state;
    
  }
}