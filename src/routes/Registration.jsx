import React, { useEffect } from 'react';
import RegistrationPage from '../components/RegistrationPage';
const Registration = () => {
    useEffect(()=>{
    var nav = document.querySelector(".navbar");
    var club = document.getElementById("club");
    nav.classList.add("sticky");
    club.style.display = "block";
    },[]);
    return ( 
        <div className="registration">
            <RegistrationPage/>
        </div>
     );
}
 
export default Registration;