import React, { useEffect, useState } from 'react';
import Imgcard from './Imgcard';
import api from '../backend.js';

const Members = () => {
    const [mem,setMem] = useState(null);
    const getMembers = async()=>{
        const response = await api.get("/api/users/all");
        setMem(response.data);
    }
    useEffect(()=>{
        getMembers();
    },[]);
    return ( 
        <div className="members-section">
            <h1>Members</h1>
            <div className="members">
                <div className="mem-list1">
                    {mem?mem.map((member,index)=>{return <Imgcard member={member} key={index} />}):null}
                </div>
            </div>
        </div>
     );
}
 
export default Members;