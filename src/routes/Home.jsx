import React from 'react';
import Section2 from "../components/Section2";
import Members from "../components/Members";
import Display from "../components/Display";

const Home = () => {
    return ( 
        <div className="home">
            <Display />
            <Section2 />
            <Members />
        </div>
     );
}
 
export default Home;