import React, { useEffect } from 'react';
const ImageEffect = () => {
    useEffect(()=>{
    var nav = document.querySelector(".navbar");
    var club = document.getElementById("club");
    club.style.display = "block";
    nav.classList.add("sticky");
    },[])
    return ( 
        <div className="img-effect">
            <div>Events gallery</div>

            <div  className="container">
                Container
            </div>
        </div>
     );
}
 
export default ImageEffect;