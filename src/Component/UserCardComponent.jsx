import { memo } from "react"






const UserCardComponent = ({
    HanldeSelectUser = () => {},
    DeleteUser = () => {},
    User = [],
    ...rest
}) => {

    return (
        <div className="container">
            <div className="row">
                <div className="box">
                    {User && User?.map((value, index) => (

                        <div className="card" key={value.id}>
                            <div className="imgBx">
                                <img src={value.avatar} alt="images" />
                            </div>
                            <div className="details">
                                <h2>{value.first_name + " " + value.last_name} <br /><span>Email : {value.email}</span></h2>
                                <button className="btn btn-outline-danger me-1" onClick={() => DeleteUser(value)}>
                                    Eliminar
                                </button>
                                <button className="btn btn-outline-success me-1" onClick={() => HanldeSelectUser(value)}>
                                    Editar
                                </button>
                            </div>
                        </div>

                    ))}

                </div>
            </div>

        </div>
    )
}




export default memo(UserCardComponent);