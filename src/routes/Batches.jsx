import React, { useEffect, useState } from "react";
import BatchesCard from "../components/BatchesCard";
import BatchesNavbar from "../components/BatchesNavbar";
import BatchesApi from "../context/batchesApi";
import { sticky } from "../components/Navbar";
import "../styles/batches.css";
import api from "../backend.js";

const userUrl = "/api/batch/2020";

const memberUrl = "/api/batch/2019";

const batch2021Url = "/api/batch/2021";

const Batches = () => {
  const [userData, setUserData] = useState([]);
  const [user2019, set2019Data] = useState([]);
  const [user2021, set2021Data] = useState([]);

  const uniqueList = [2018, 2019, 2020, 2021, "ALL"];
  useEffect(() => {
    sticky();
  }, []);

  useEffect(() => {
    batchesApi();
    getBatch2019();
    getBatch2021();
  }, []);

  const getBatch2019 = async () => {
    const response = await api.get(userUrl);
    set2019Data(response.data);
    // console.log(response.data)
  };
  const batchesApi = async () => {
    const res = await api.get(memberUrl);
    // console.log(res.data);
    setUserData(res.data);
  };

  const getBatch2021 = async () => {
    const res = await api.get(batch2021Url);
    set2021Data(res.data);
  };

  // console.log(userData);

  const [menuData, setMenuData] = useState(BatchesApi);
  // const [menuList, setMenuList] = useState(uniqueList);
  // const [members,setMembers] = useState([]);
  // console.log(menuData)

  const filterItem = (category) => {
    // console.log(category)
    if (category === "ALL") {
      setMenuData([...BatchesApi, ...userData, ...user2019, ...user2021]);
      return;
    } else {
      const updatedList = [
        ...BatchesApi,
        ...userData,
        ...user2019,
        ...user2021,
      ].filter((curElem) => {
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
