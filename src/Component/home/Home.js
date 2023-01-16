import React from 'react'
import style from './Home.module.css'
import Image from './Dp.png'
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';





function Home() {
  

    const Navoption=[
       {Option: 'Home', path : '/'},
      {Option: 'log' ,path:'/Login' },
      {Option: 'About' ,path:'/About' },
      {Option: 'Registration' ,path:'/Registration' }
    ]

  return (
    <>
    
    <div className={style.Wrapper}>
      <span className={style.ImgLogo} >
    <a href="/">
          <img
            src={Image}
            alt="ProfileImg"
          />
        </a>
        </span>

        <div className={style.navopt}>
      <div className={style.Dropdown}>
      <Dropdown >
      <Dropdown.Toggle variant="success" id="dropdown-basic">

      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/Home">Home</Dropdown.Item>
        <Dropdown.Item href="/Login">Login</Dropdown.Item>
        <Dropdown.Item href="/About">About</Dropdown.Item>
        <Dropdown.Item href="/Registration">Registration</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    {Navoption.map(({Option ,path})=>
    <Link to={path}>
        <p className={style.List}>{Option}</p>
        </Link>
   ) }
   </div>
   </div>
    </>
  )
   
}

export default Home