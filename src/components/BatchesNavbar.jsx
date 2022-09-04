import React from 'react';
const BatchesNavbar = ({ filterItem, menuList, category }) => {
    return ( 
        <div className="batches-navbar">
            <div className='content'>
                <h2> Members</h2>
                <h2> Members</h2>
            </div>
           
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