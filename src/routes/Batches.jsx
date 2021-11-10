import React, { useEffect, useState } from 'react';
import BatchesCard from '../components/BatchesCard';
import BatchesNavbar from '../components/BatchesNavbar';
import BatchesApi from '../context/batchesApi';
import '../styles/batches.css';

const uniqueList = [
    ...new Set(
      BatchesApi.map((curElem) => {
        return curElem.category;
      })
    ),
    "All",
  ];

const Batches = () => {
    useEffect(()=>{
        var nav = document.querySelector(".navbar");
        var club = document.getElementById("club");
        nav.classList.add("sticky");
        club.style.display = "block";
        },[]);
    const [menuData, setMenuData] = useState(BatchesApi);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        if (category === "All") {
          setMenuData(BatchesApi);
          return;
        }
        //}
    
        const updatedList = BatchesApi.filter((curElem) => {
          return curElem.category === category;
        });
    
        setMenuData(updatedList);
        setMenuList(uniqueList);
      };

    return ( 
        <div className="batches">
            <BatchesNavbar filterItem={filterItem} menuList={menuList}/>
            <BatchesCard batchData={menuData}/>
        </div>
     );
}
 
export default Batches;