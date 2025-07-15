// import { useEffect, useState } from "react";
// import api from "./api";
import Navbar from "./components/Navbar/Navbar";
import styled from "styled-components";
import NavbarLeft from "./components/NavbarLeft/NavbarLeft";
import carne from "../src/assets/carne.jpg";
import burger from "../src/assets/hamburger.jpg";
import pie from "../src/assets/pie.jpg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import StartCarousel from "../src/components/Carrousel";
import api from "./api";
import { yellow } from "@mui/material/colors";

const Container = styled.div`
  display: flex;
  width: 65vw;
  height: auto;
  background: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  width: 100%;
  height: auto;
  background: pink;
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
  /* width: 450px; */
  width: 80%;
  /* position: relative; */
  /* margin-right: 18px; */
  justify-content: center;
  align-items: center;
  margin-left: 75px;
  @media screen and (max-width: 800px) {
    width: 60%;
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

const TextUm = styled.div`
  display: flex;
  width: 72%;
  font-family: "Emilys Candy";
  font-size: 18px;
  line-height: 25px;
  justify-content: center;
  align-items: center;

  /* margin-right: 18px; */
  @media screen and (max-width: 800px) {
    /* width: 10%; */
    /* margin-top: -2px; */
  }
`;

const Views = styled.div`
  @media screen and (max-width: 800px) {
    width: 500rem;
  }
`;

const Card = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background: green;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  margin-top: 8px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center;  */
    /* margin-left: 6px; */
    /* margin-bottom: -30px; */
  }
`;

function App() {
  const [posts, setPosts] = useState([]);

  async function showPosts() {
    try {
      const data = await api.get("/get-posts");

      setPosts(data.data);

      return posts;
    } catch (error) {
      return alert(error);
    }
  }

  useEffect(() => {
    showPosts();
  }, []);

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
      {/* <ContainerNavBarleft> */}
      {/* <NavbarLeft /> */}
      <Container>
        <br />

        <StartCarousel />

        <DivdoMeio>
          {posts.map((items) => {
            return (
              <Card key={items.id}>
                <div
                  style={{
                    display: "flex",
                    padding: "15px",
                    flexDirection: "column",
                    width: "80%",
                    justifyContent: "center",
                    alignItems: "center",
                    // background: "yellow",
                    height: "auto",
                  }}
                >
                  {/* <div> */}
                  <h1 style={{ color: "#b30000", width: "450px" }}>
                    {items.title}
                  </h1>

                  <div>
                    <Image src={items.image} alt="imagem" />
                  </div>
                  <TextUm>
                    {items.text}
                    popoipoipoipoipoipoilkjkbhgcvgrdreswqa
                  </TextUm>
                  <p style={{ fontSize: "17px" }}>{items.author}</p>
                  <button
                    onClick={() => alert("Me Clicou!!")}
                    style={{
                      display: "flex",
                      width: "75px",
                      borderRadius: "10px",
                      marginTop: "10px",
                      cursor: "pointer",
                      fontSize: "16px",
                      padding: "15px",
                      background: "pink",
                      color: "black",
                    }}
                  >
                    Leia Mais
                  </button>
                  {/* </div> */}
                </div>
              </Card>
            );
          })}

          {/* <Card style={{ marginLeft: "16px" }}>
            <div
              style={{
                display: "flex",
                padding: "15px",
                flexDirection: "column",
              }}
            >
              <h1 style={{ color: "#b30000", width: "212px" }}>
                Frango Assado
              </h1>

              <div style={{ width: "50%" }}>
                <Image src={carne} alt="imagem" />
              </div>
              <Text>
                Loren Ipsun Loren IpsunLoren IpsunLoren IpsunLoren Ipsun Loren
                IpsunLoren IpsunLoren IpsunLoren IpsunLoren Ipsun Loren
                IpsunLoren IpsunLoren IpsunLoren IpsunLoren Ipsun Loren
                IpsunLoren IpsunLoren IpsunLoren IpsunLoren Ipsun Loren
                IpsunLoren IpsunLoren IpsunLoren IpsunLoren IpsunLoren
                IpsunLoren Ipsun Loren Ipsun Loren IpsunLoren IpsunLoren
                IpsunLoren Ipsun Loren IpsunLoren IpsunLoren IpsunLoren
                IpsunLoren Ipsun Loren IpsunLoren IpsunLoren IpsunLoren
                IpsunLoren Ipsun Loren IpsunLoren IpsunLoren IpsunLoren
                IpsunLoren Ipsun Loren IpsunLoren IpsunLoren IpsunLoren
                IpsunLoren
              </Text>
              <p style={{ fontSize: "17px" }}>Autor:Fulano de Tal</p>
              <buton
                onClick={() => alert("Me Clicou!!")}
                style={{
                  display: "flex",
                  width: "75px",
                  borderRadius: "10px",
                  marginTop: "10px",
                  cursor: "pointer",
                  fontSize: "16px",
                  padding: "15px",
                  background: "pink",
                  color: "black",
                }}
              >
                Leia Mais
              </buton>
            </div>
            <br />
          </Card> */}
          {/* ); */}
          {/* })} */}
        </DivdoMeio>
      </Container>
      {/* </ContainerNavBarleft> */}

      {/* </div> */}
    </div>
  );
}

export default App;
