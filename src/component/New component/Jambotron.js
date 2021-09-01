
import React from "react";
import Container from 'react-bootstrap/Container'
import s from './Jambo.module.css'





const  Example  = () => {

  return (
      <div fluid className={s.Jambo}>
               <div className={s.overlay}></div>
      <Container>
         <h1>WEB Developer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Adipisci alias aliquam dolorem, enim fuga laboriosam magnam minima
              mollitia non quisquam reiciendis repellendus sint
              suscipit ut, vel veniam veritatis vero voluptate.</p>

      </Container>

  </div>
  )
}


export default Example