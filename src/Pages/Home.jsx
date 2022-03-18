import { useCallback, useContext, useEffect, useState } from "react";
import UserContext from "../Context/User/UserContext";
import UserCardComponent from "../Component/UserCardComponent"
import NavbarComponent from "../Component/NavbarComponent";







const HomeComponent = () => {

    const { Users,GetUsers, SelectedUser, handleChangeInput, InputSearch } = useContext(UserContext);
    const [ state , setState ] = useState([])


    useEffect(() => {
        GetUsers()
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


    return(
        <div className="">

        <NavbarComponent 
        Barnd="React Context App User List" 
        Search={SearchLocalUser} 
        OnChange={SearchLocalUser}
        InputSearch={InputSearch}
        />


        <br />

        <UserCardComponent User={state} />

        </div>
    )
}



export default HomeComponent;