import { useReducer, useState } from "react"
import { toast } from "react-toastify";
import UserReducer from "./UserReducer"
import UserContext from "./UserContext"
import Axios from '../../Service/';
import { UserFormClass } from "../Types";
import { isValidEmail, hasEnoughLength } from '../../Lib/Helpers'

const Ruta = 'https://reqres.in/api/'

const UserState = (props) => {

    const InitialState = {
        Users: [],
        InputSearch: '',
        ResultSearch: [],
        SelectedUser: {},
        UserForm: new UserFormClass({}),
        Errors: {},
        FormValidations: {
            first_name: (str) => !hasEnoughLength(str, 3) ? "First Name At Least Has To Three Characters" : '',
            last_name: (str) => !hasEnoughLength(str, 3) ? "Last Name At Least Has To Three Characters" : '',
            email: (email) => !isValidEmail(email) ? "You Has To Write A Valid Email" : '',
            avatar: (link) => !hasEnoughLength(link, 3) ? "You Has To Write A Valid Image Link" : ''
        }
    }

    const [state, dispatch] = useReducer(UserReducer, InitialState);



    /*****************************************************
     * ***************************************************
     *                         USERS 
     * ***************************************************
     * ***************************************************/

    const GetUsers = async () => {
        const res = await Axios.get(String(`${Ruta}users`));
        dispatch({ type: 'GET_USERS', payload: res?.data?.data });
    }

    const GetUser = async (id) => {
        const res = await Axios.get(String(`${Ruta}users/${id}`));
        dispatch({ type: 'GET_USER', payload: res?.data?.data });
    }

    const handleSubmit = async () => {
        try {
            if (Number(state.UserForm.id) > 0)
                await UpdateUser(state.UserForm)
            else await CreateUser()

        } catch (error) {
            toast.warning(`${error.message}`)
        }

    }

    const CreateUser = async () => {
        try {
            const res = await Axios.post(String(`${Ruta}users/`), state.UserForm)
            dispatch({ type: "CREATE_USER", payload: new UserFormClass(res?.data) })
        } catch (error) { toast.warning(`${error.message}`) }
    }


    const handleFormError = async () => {
        try {
            await dispatch({ type: 'HANDLE_SUBMIT_FORM' })
        } catch (error) { toast.warning(`${error.message}`) }
    }

    const UpdateUser = async (Users) => {
        try {
            const res = await Axios.put(String(`${Ruta}users/${Users?.id}`) , new UserFormClass(Users))
            dispatch({ type: 'UPDATE_USER', payload: { id: Users.id , value : new UserFormClass(res?.data)} })
        } catch (error) { toast.warning(`${error.message}`) }
     }

    const DeleteUser = async (Users) => {
        try {
            await Axios.delete(String(`${Ruta}users/${Users?.id}`))
            dispatch({ type: 'DELETE_USER', payload: Users?.id })
        } catch (error) { toast.warning(`${error.message}`) }
    }


    const handleSelectUser = (Users) => {
        try {
            dispatch({type:'HANDLE_SELECT_USER' , payload: new UserFormClass(Users)})
        } catch (error) { toast.warning(`${error.message}`) }
    }

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

    const handleChangeInput = ({ currentTarget: input }) => {
        try {
            dispatch({ type: 'ON_CHANGE_INPUT', payload: input.value })
        } catch (error) {
            toast.warning(`${error.message}`)
        }
    }

    const handleChangeFormInput = ({ currentTarget: input }) => {
        try {
            dispatch({ type: 'ON_CHANGE_INPUT_FORM', payload: { name: input.name, value: input.value, Validation : input.attributes['validation']?.value } })
        } catch (error) {
            toast.warning(`${error.message}`)
        }
    }






    /*****************************************************
     * ***************************************************
     *                       INPUT SEARCH 
     * ***************************************************
     * ***************************************************/






    return (
        <UserContext.Provider value={{
            ...state,
            GetUsers,
            GetUser,
            DeleteUser,
            UpdateUser,
            DeleteUser,
            handleChangeInput,
            handleChangeFormInput,
            handleSubmit,
            handleFormError,
            handleSelectUser,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}



export default UserState;