import React from 'react'
import { MenuDropDown } from './DropDownItem'
import { Link } from "react-router-dom"
import { useState } from 'react';
import './DropDown.css'

const DropDown = () => {
    const  [dropdownn , setDropdown] = useState(false)

  return (
    <div>
        <ul className={dropdownn ? "drop-menu.clicked" : "drop-menu"} onClick={() => setDropdown(!dropdownn)}>
          {MenuDropDown.map((item, index) => {
            return (
              <li className="drop-link" key={index}>
                <Link 
                    className="page-drop-link" 
                    to={item.url}
                    onClick={() => setDropdown(!false)}>
                    {item.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  )
}

export default DropDown