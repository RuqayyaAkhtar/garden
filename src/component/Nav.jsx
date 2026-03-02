import React from 'react';
import List from './List';
import Navbar from 'react-bootstrap/Navbar';
// import { MdSearch } from "react-icons/md";
import WebLogo from './plant-imagess/rev-logo.png'
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";



const Nav = () => {
  return (
    <Navbar className='Nav' fixed="top">
      <div className="web-logo">
        <img src={WebLogo} alt="" />
      </div>
      <ul className='nav-ul'>
      <List/>
      <CiMenuBurger className='menu' />
      </ul> 
      <ul className='nav-ul2'>
        <li><CiSearch className='new-i' /></li>
        <li><CiShoppingCart className='new-i' /></li>
        <li><CiUser className='new-i' /></li>
        <li><CiHeart className='new-i' /></li>
      </ul>
    </Navbar>
  );
}

export default Nav;
