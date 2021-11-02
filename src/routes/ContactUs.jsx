import React, { useEffect } from 'react';
import SocialMediaCard from '../components/SocialMediaCard';
const ContactUs = () => {
    useEffect(()=>{
        var nav = document.querySelector(".navbar");
        var club = document.getElementById("club");
        nav.classList.add("sticky");
        club.style.display = "block";
        },[]);
    return ( 
        <div className="contact-us">
            <h2>Social Media Feeds</h2>
            <div className="social-media-cards">
                <SocialMediaCard fbsrc={true} />
                <SocialMediaCard instasrc={true}/>
                <SocialMediaCard twittersrc={true}/>
            </div>
        </div>
     );
}
 
export default ContactUs;