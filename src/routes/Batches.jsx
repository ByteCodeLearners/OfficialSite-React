import React, { useEffect, useState } from "react";
import BatchesCard from "../components/BatchesCard";
import BatchesNavbar from "../components/BatchesNavbar";
import BatchesApi from "../context/batchesApi";
import { sticky } from "../components/Navbar";
import "../styles/batches.css";
import axios from "axios";

const userUrl =
  "https://www.bytecodelearners.club/bytecode-server/api/batch/2020";

const memberUrl =
  "https://www.bytecodelearners.club/bytecode-server/api/batch/2019";  



const Batches = () => {
  const [userData, setUserData] = useState([]);
  const [user2019, set2019Data] = useState([]);
  // const uniqueList = [
  //   ...new Set(
  //     userData.map((curElem) => {
  //       return curElem.user_details.batch;
  //     })
  //   ),
  //   "All",
  // ];
  const uniqueList = [2018,2019,2020,'ALL']
  useEffect(() => {
    sticky();
  }, []);

  useEffect(() => {
    batchesApi();
    getBatch2019();
  }, []);

  const getBatch2019 = async () => {
    const response = await axios.get(userUrl);
    set2019Data(response.data);
    console.log(response.data)
  };
  const batchesApi = async()=>{
    const res = await axios.get(memberUrl);
    setUserData(res.data);
  }

  // console.log(userData);

  const [menuData, setMenuData] = useState(BatchesApi);
  // const [menuList, setMenuList] = useState(uniqueList);
  // const [members,setMembers] = useState([]);
  // console.log(menuData)

  const filterItem = (category) => {
    
    // console.log(category)
    if (category === "ALL") {
      setMenuData([...BatchesApi,...userData,...user2019]);
      return;
    }else{
      const updatedList = [...BatchesApi,...userData,...user2019].filter((curElem) => {
        return curElem.batch === category;
      });
      
      setMenuData(updatedList);
    }
    // console.log(menuData)
  };
  
  return (
    <div className="batches">
      <BatchesNavbar filterItem={filterItem} menuList={uniqueList} />
      <BatchesCard batchData={menuData} />
    </div>
  );
};

export default Batches;
