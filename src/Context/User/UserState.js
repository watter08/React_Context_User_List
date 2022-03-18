import { useReducer, useState   } from "react"
import UserReducer from "./UserReducer"
import UserContext from "./UserContext"
import Axios from '../../Service/';

const Ruta = 'https://reqres.in/api/'

const UserState = (props) => {

    const InitialState = {
        Users : [],
        InputSearch : '',
        ResultSearch : [],
        SelectedUser: {}
    }

    const [state , dispatch ] = useReducer(UserReducer,InitialState);



    /*****************************************************
     * ***************************************************
     *                         USERS 
     * ***************************************************
     * ***************************************************/
    
    const GetUsers = async () => {
        const res = await Axios.get(String(`${Ruta}users`));
        dispatch({type : 'GET_USERS' , payload : res?.data?.data});
    }
    
    const GetUser = async (id) => {
        const res = await Axios.get(String(`${Ruta}users/${id}`));
        dispatch({type : 'GET_USER' , payload : res?.data?.data});
    }
    
    const CreateUser = () => {}
    
    const UpdateUser = () => {}
    
    const DeleteUser = () => {}



    /*****************************************************
     * ***************************************************
     *                         USERS 
     * ***************************************************
     * ***************************************************/


    /*****************************************************
     * ***************************************************
     *                     INPUT SEARCH 
     * ***************************************************
     * ***************************************************/

    const handleChangeInput = ({currentTarget : input }) => {
        try {
        dispatch({type : 'ON_CHANGE_INPUT' ,payload : input.value })
        } catch (error) { console.log(error) }
    }







    /*****************************************************
     * ***************************************************
     *                       INPUT SEARCH 
     * ***************************************************
     * ***************************************************/
    





 return(
    <UserContext.Provider value={{
        ...state,
        GetUsers,
        GetUser,
        CreateUser,
        UpdateUser,
        DeleteUser,
        handleChangeInput,
    }}>
        {props.children}
    </UserContext.Provider>
 )
}



export default UserState;