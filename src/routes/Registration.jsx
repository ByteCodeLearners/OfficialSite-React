import React, { useEffect } from 'react';
import {  sticky } from '../components/Navbar';
import RegistrationPage from '../components/RegistrationPage';
const Registration = () => {
    useEffect(()=>{
        sticky();
    },[]);
    return ( 
        <div className="registration">
            <RegistrationPage/>
        </div>
     );
}
 
export default Registration;