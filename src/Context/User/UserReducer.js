import { 
    CREATE_USER , 
    DELETE_USER , 
    GET_USER , 
    GET_USERS ,
    UPDATE_USER, 
    HANDLE_SELECT_USER,
    ON_CHANGE_INPUT, 
    ON_CHANGE_INPUT_FORM,
    HANDLE_SUBMIT_FORM,
  } from '../Types';


const useReducer = (state , action ) => {
    try {
        
        const { payload , type } = action

        switch(type) {
            case GET_USERS:
                return {
                    ...state,
                    Users: payload
                }
            case GET_USER: 
            return{
                ...state,
                SelectedUser : payload
            }
            case ON_CHANGE_INPUT: 
            return{
                ...state,
                InputSearch : payload
            }
            case ON_CHANGE_INPUT_FORM:
               return {
                   ...state,
                   UserForm: {
                       ...state.UserForm,
                       [payload.name] : InputsValidation({...payload, prev : state.UserForm[payload.name]})
                   },
                   Errors: getInputErrorMessage(state , payload)
               }
            case HANDLE_SUBMIT_FORM: 
            return{
                ...state,
                Errors : getFormErrorMessages(state)
            }
            case CREATE_USER:
                return{
                    ...state,
                    Users : [...state.Users, payload]
                }
            case DELETE_USER:
                return{
                    ...state,
                    Users: [...state.Users].filter((value) => value.id !== payload)
                }
            case HANDLE_SELECT_USER:
                return{
                    ...state,
                    UserForm : payload
                }
            case UPDATE_USER:
                return{
                    ...state,
                    Users: [...state.Users].filter((value) => value.id !== payload.id).concat(payload.value)
                }
            default : 
            return state;
        }

    } catch (error) {
        console.log(error)
    }
}




const getInputErrorMessage = (prevState , action) => {
    const data = {...prevState}
    const validations = data.FormValidations
    if (!validations[action.name]) return {};
    const ErrorMessage = validations[action.name](action.value);
    if( String(ErrorMessage).length > 0 )
    data.Errors[action.name] = ErrorMessage
    else
    delete data.Errors[action.name]
    return  data.Errors
};

const getFormErrorMessages = (prevState) => {
    const data = {...prevState}
    const validationErrors = {};
    const validations = data.FormValidations
    for (let validationName in validations) {
        let errorMessage = validations[validationName](data.UserForm[validationName]);
        if (errorMessage) {
            validationErrors[validationName] = errorMessage;
        }
    }
    return validationErrors;
};

const InputsValidation = (payload) => {
    var regexString = new RegExp("^[a-zA-Z ]+$");
    var regexNumber = new RegExp("^[0-9]+$");
    // var regexLink = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
    return (payload.Validation === 'letter' || payload.Validation === 'number')  ?
           (regexString.test(payload.value) === true || regexNumber.test(payload.value) === true ) ? payload.value : payload.prev :
           payload.value;
}

export default useReducer;