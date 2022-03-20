import { useCallback, useContext, useEffect, useState, memo } from "react";
import useModalHooks from '../Hooks/useModalHooks';
import UserContext from "../Context/User/UserContext";
import UserCardComponent from "../Component/UserCardComponent"
import NavbarComponent from "../Component/NavbarComponent";
import UserFormModal from './UserFormModal';
import FooterComponent from '../Component/FooterComponent'





const HomeComponent = () => {

    const { handleClose , handleShow , handleToggle , show } = useModalHooks(false);
    const { 
        Users,
        GetUsers, 
        SelectedUser, 
        handleChangeInput, 
        InputSearch, 
        handleChangeFormInput , 
        UserForm, 
        handleSubmit, 
        Errors, 
        handleFormError,
        DeleteUser,
        handleSelectUser,
     } = useContext(UserContext);
    const [ state , setState ] = useState([])


    useEffect(() => {
        Promise.all([GetUsers(), handleFormError()])
    }, [])

    useEffect(() => {
        if(!Array(Users).length > 0) return;
        setState(Users);
    },[Users]);

    const SearchLocalUser = useCallback((event) => {
        handleChangeInput(event);
        const filter = Users.filter((value) => 
        value.first_name.toLowerCase().includes(event.currentTarget.value.toLowerCase()) ||
        value.last_name.toLowerCase().includes(event.currentTarget.value.toLowerCase())
        )
        setState(filter)
    },[Users]);


    const HanldeSelectUser = async (Users) => {
        await Promise.all([handleToggle() ,handleSelectUser(Users) ])
        await handleFormError();
    }

    return(
        <div className="">

        <NavbarComponent 
        Barnd="React Context App User List" 
        Search={SearchLocalUser} 
        OnChange={SearchLocalUser}
        InputSearch={InputSearch}
        OnClick={handleShow}
        />


       
        <h3 className="text-white text-center p-5">Hover Image</h3>

        <UserCardComponent User={state} DeleteUser={DeleteUser} HanldeSelectUser={HanldeSelectUser}  />

        <UserFormModal 
        show={show} 
        handleToggle={handleToggle}
        handleClose={handleClose}
        handleChangeFormInput={handleChangeFormInput}
        UserForm={UserForm}
        handleSubmit={(Users) => {handleSubmit(Users); handleClose() }}
        FooterButtonSubmitLabel={UserForm?.id ? 'Actualizar' : 'Guardar'}
        errors={Errors}
        />

        <FooterComponent/>

        </div>
    )
}



export default memo(HomeComponent);