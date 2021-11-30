import React, { useEffect } from 'react';
import Section2 from "../components/Section2";
import Members from "../components/Members";
import Display from "../components/Display";
import {  sticky } from '../components/Navbar';
import Gallery from '../components/Gallery';

const Home = () => {
    useEffect(()=>{
        sticky();
    },[])
    return ( 
        <div className="home">
            <Display />
            <Section2 />
            <Members />
            <Gallery/>
        </div>
     );
}
 
export default Home;