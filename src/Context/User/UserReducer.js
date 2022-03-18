import { CREATE_USER , DELETE_USER , GET_USER , GET_USERS ,UPDATE_USER, ON_CHANGE_INPUT  } from '../Types';


export default (state , action ) => {
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
            default : 
            return state;
        }

    } catch (error) {
        console.log(error)
    }
}