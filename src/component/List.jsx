import React from 'react';
import { Link } from 'react-router-dom';
const List = () => {

  const linkStyle = {
    textDecoration: "none",
    color: 'white',
    fontSize:'14px',
    textTransform:'Uppercase',
    margin:'0'
  };
  
  return (
     <>
    <Link to={"/"} style={{textDecoration:"none",color:"white",fontSize:'14px',textTransform:'uppercase'}}> <li>ARTICLE</li></Link>
     <Link to={"/"} style={linkStyle}><li>PRODUCT</li></Link>
     <Link to={"/"} style={linkStyle}><li>CONTACT</li></Link>
     <Link to={"/"} style={linkStyle}><li>ABOUT</li></Link>
     <Link to={"/"} style={linkStyle}><li>BLOG</li></Link>
     </>
  );
}

export default List;
