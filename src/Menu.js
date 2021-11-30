import React from "react";
import {NavLink} from 'react-router-dom'
import './Menu.css'

function Menu({menus}){
    const applyActiveColor = ({isActive}) => (isActive? {border:'none'/*, background: '#e4cbaa'*/}:{})
    return(
        <>
            {menus.map((menu, id) => {
                return(
                    <NavLink key={id} to={menu.url} className="menu-item" style={applyActiveColor}>
                        {menu.name}
                    </NavLink>
                )
            })}
        </>
    )
}

export default Menu