import { useState } from "react";
import Login from "../components/Login";
import UpdateEvent from "../components/UpdateEvent";
import "../styles/update_events.css";

const UpdateEventDetails = () => {
    const [isLogged,setLogged] = useState(false);
    return ( 
        <div className="update-event-details">
            {isLogged?<UpdateEvent/>:<Login setLogged={setLogged}/>}
        </div>
     );
}
 
export default UpdateEventDetails;