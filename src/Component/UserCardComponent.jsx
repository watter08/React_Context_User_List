import { memo } from "react"






const UserCardComponent = ({
    User = [],
    ...rest
}) => {

    return (
        <div className="container">
            <div className="row">
            <div class="box">
            {User && User?.map((value, index) => (
                // <div className="card-container col-md-4 p-2 m-2" key={index}>
                //     <span className="pro">{value.id}</span>
                //     <img className="round" src={value.avatar} alt="user" />
                //     <h3>{value.first_name}</h3>
                //     <h6>{value.last_name}</h6>
                //     <p>User Email : {value.email}</p>
                //     <div className="buttons">
                //         <button className="primary">
                //             Eliminar
                //         </button>
                //         <button className="primary ghost">
                //             Editar
                //         </button>
                //     </div>
                // </div>
                <>
                  
                  
      <div class="card" key={index}>
        <div class="imgBx">
            <img src={value.avatar} alt="images" />
        </div>
        <div class="details">
            <h2>{value.first_name +" " + value.last_name} <br /><span>Email : {value.email}</span></h2>
             <button className="btn btn-outline-danger me-1">
                 Eliminar
             </button>
             <button className="btn btn-outline-success me-1">
                 Editar
             </button>
        </div>       
      </div>

                </>

            ))}

</div>
            </div>
           
        </div>
    )
}




export default memo(UserCardComponent);