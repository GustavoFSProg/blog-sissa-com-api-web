// import { useEffect, useState } from "react";
// import api from "./api";
import styled from "styled-components";
import fundo from "../assets/fundoA.jpeg";
import Navbar from "../components/Navbar/Navbar";
// import fundo1 from '../assets/fundo-1.jpeg'
// import burger from "../assets/hamburger.jpg";
// import pie from "../assets/pie.jpg";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// import React, { Component } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import StartCarousel from "../src/components/Carrousel";

const Container = styled.div`
  display: flex;
  width: 65vw;
  height: auto;
  background: url(${fundo}) repeat;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #1a0000;


  @media screen and (max-width: 800px) {
    width: 100%;
    /* padding: 9px;
    padding-left: 50px;
    padding-right: 50px; */
    justify-content: center;
    align-items: center;
  }
`;

const ContainerNavBarleft = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  background: #ccffe6;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DivdoMeio = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  /* background: pink; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: -80px; */
  /* align-content: first baseline; */
  @media screen and (max-width: 800px) {
    margin-top: -15px;
    /* padding-left: 15px; */
    /* margin-left: -50px; */
  }
`;

const Image = styled.img`
  display: flex;
  width: 600px;

  margin-right: 18px;

  @media screen and (max-width: 800px) {
    width: 280px;
  }
`;

const Text = styled.p`
  display: flex;
  width: 540px;
  font-family: "Emilys Candy";
  font-size: 18px;
  line-height: 25px;

  margin-right: 18px;
  @media screen and (max-width: 800px) {
    width: 99%;
  }
`;


const TextUm = styled.p`
  display: flex;
  width: 540px;
  font-family: "Emilys Candy";
  font-size: 18px;
  line-height: 25px;

  margin-right: 18px;
  @media screen and (max-width: 800px) {
    width: 108%;
    margin-top: -2px;
  }
`;

const Views = styled.div`
  @media screen and (max-width: 800px) {
    width: 500rem;
  }
`;

const Card = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  /* background: #e6e6e6; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  margin-top: 8px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    /* margin-left: 6px; */
    margin-bottom: -30px;
  }
`;

function Receitas() {
  // const [posts, setPosts] = useState([]);

  // async function showPosts() {
  //   try {
  //     const data = await api.get("/get-posts");

  //     setPosts(data.data);

  //     return posts;
  //   } catch (error) {
  //     return alert(error);
  //   }
  // }

  // useEffect(() => {
  //   showPosts();
  // }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden",

      }}
    >
      <Navbar style={{ position: "fixed", top: "0%", left: "0%" }} />

   
      <Container>
        <br />

        <h1 style={{

    color: '#b30000'

        }}>RECEITAS</h1>

        <h2>Bolo de chocolate simples</h2>
        <div style={{display: 'flex', flexDirection: 'column', width: '66%', alignItems: 'flex-start'}}>

        <h3 >Ingredientes:</h3>     

        <ul style={{lineHeight: '26px'}}>
          <li>
            3 ovos
          </li>
          <li>
          1 e 1/2 xícara (chá) de açúcar
          </li>
          <li>
          2 xícaras (chá) de farinha de trigo
          </li>
          <li>
          1 xícara (chá) de chocolate em pó ou achocolatado
          </li>
          <li>
          1/2 xícara (chá) de óleo
          </li>
          <li>
          1 colher (sopa) de fermento em pó
          </li>
          <li>
          1 pitada de sal
          </li>
          <li>
          1 xícara (chá) de água quente
          </li>
        </ul>

        <h3 >Modo de Preparo:</h3> 
        <h4 >Massa</h4> 


<ul style={{lineHeight: '26px'}}>
  <li>
  Preparo : 40min
  </li>
  <li>
  m um liquidificador, bata os ovos, o açúcar, o óleo, o achocolatado e a farinha de trigo.
  </li>
  <li>
  Despeje a massa em uma tigela e adicione a água quente e o fermento, misturando bem.
  </li>
  <li>Despeje a massa em uma forma untada e asse em forno médio-alto (200° C), preaquecido, por 40 minutos.1 xícara (chá) de chocolate em pó ou achocolatado
  </li>
  <li>
  Desenforme ainda quente.
  </li>
  
</ul>
  <h3>Cobertura</h3>

  <ul style={{lineHeight: '26px'}}>
    <li>
    Em uma panela, leve todos os ingredientes ao fogo até levantar fervura.
    </li>
    <li>
    Despeje ainda quente em cima do bolo.
    </li>
  </ul>
        </div>


        <br />
    <br />
    <br />
    <br />

      </Container>

    </div>
  );
}

export default Receitas;
