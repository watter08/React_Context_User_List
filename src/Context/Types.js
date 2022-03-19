export const GET_USERS = 'GET_USERS'
export const GET_USER = 'GET_USER'
export const CREATE_USER = 'CREATE_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'
export const ON_CHANGE_INPUT = 'ON_CHANGE_INPUT'
export const ON_CHANGE_INPUT_FORM = 'ON_CHANGE_INPUT_FORM'
export const HANDLE_SUBMIT_FORM = 'HANDLE_SUBMIT_FORM'
export const HANDLE_SELECT_USER = 'HANDLE_SELECT_USER'

export class UserFormClass {
    id;
    first_name;
    last_name;
    email;
    avatar;

    constructor({ first_name = '' ,id ='' , last_name = '' ,email ='' , avatar = '' }){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.avatar = avatar;
    }
}