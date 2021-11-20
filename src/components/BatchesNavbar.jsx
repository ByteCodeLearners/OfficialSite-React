import React from 'react';
const BatchesNavbar = ({ filterItem, menuList, category }) => {
    return ( 
        <div className="batches-navbar">
            <h1 className="heading"> Welcome to Bytecode </h1>
            <h1 className="b-members"> Members </h1>
            <nav className="nav-bar">
                <div className="btn-group">
                {menuList?menuList.map((curElem,index) => {
                    return (
                    <button key={index}
                        className="btn-group__item"
                        onClick={() => filterItem(curElem)}
                    >
                        {curElem}
                    </button>
                    );
                }):null}
                </div>
            </nav>
        </div>
     );
}
 
export default BatchesNavbar;