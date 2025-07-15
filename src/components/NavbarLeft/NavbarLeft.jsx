import React from "react";
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
        width: 25vw;
        height: 100vh;
        justify-Content: left;
        align-items: start;
        color: gray;
        background: #f2f2f2;
        font-family: Roboto;
        margin-left: 1px;
        margin-top: -838px;


   @media screen and (max-width: 800px){
    display: none;

   }
   
`

function NavbarLeft() {
  return (
    // <div
    //   style={{
    //     display: "flex",
    //     width: "25vw",
    //     height: "100vh",
    //     justifyContent: "left",
    //     alignItems: "start",
    //     color: "gray",
    //     background: "#cccccc",
    //     fontFamily: "Roboto",
    //     marginLeft: '1px'
    //   }}
    // >
    <Container>

      <div
        style={{
          display: "flex",
          width: "70%",
          height: "auto",
          justifyContent: "space-between",
          padding: "3px",
          background: "none",
        }}
      >
       <ul style={{ display: 'flex', 
        
        listStyleType: 'none',
        flexDirection: 'column', lineHeight: '40px'}}>
        <li >
          ARTIGOS
        </li>

        <li>
          ARTIGOS
        </li>  <li>
          ARTIGOS
        </li>  <li>
          ARTIGOS
        </li>  <li>
          ARTIGOS
        </li>  <li>
          ARTIGOS
        </li>
        <li>
          ARTIGOS
        </li> <li>
          ARTIGOS
        </li>
       </ul>
      </div>
      </Container>
    
  );
}

export default NavbarLeft;
