import React from 'react';
import Imgcard from './Imgcard';
import members from "../context/members";

const Members = () => {
    return ( 
        <div className="members-section">
            <h1>Members</h1>
            <div className="members">
                <div className="mem-list1">
                    {members.map((member,index)=>{return <Imgcard member={member} key={index} />})}
                </div>
            </div>
        </div>
     );
}
 
export default Members;