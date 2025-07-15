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
import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer/footer";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  /* background: #d9d9d9; */
  flex-direction: column;
  font-size: 24px;
  margin-bottom: 200px;
  overflow: hidden;
`;

const H1 = styled.h1`
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: #b30000;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: white;
  background-color: gray;
  padding: 10px;
  border-radius: 10px;
  transition: ease all 0.8s;

  &:hover {
    background-color: green;
    color: yellow;
  }

  cursor: pointer;
  /* 
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  } */
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  /* grid-template-columns: repeat(2, 1fr); */
  /* gap: 200px; */
  width: 62rem;
  height: auto;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding-bottom: 9rem;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 1rem;
  border-radius: 20px;
  color: white;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    justify-content: center;
    align-items: center;
  }
`;

const ContainerPosts = styled.div`
  height: auto;
  padding-bottom: 20px;
  /* margin-bottom: -130px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #b30000;
  width: 100%;

  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;

const Imagem = styled.img`
  width: 500px;
  height: 400px;

  @media screen and (max-width: 800px) {
    width: 300px;
    height: 200px;
  }
`;

const Desc = styled.p`
  width: 70%;
  text-indent: 25px;
  line-height: 25px;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

const SpanTitle = styled.span`
  font-size: 34px;

  @media screen and (max-width: 800px) {
    font-size: 26px;
  }
`;

function App() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  async function showPosts() {
    try {
      const data = await api.get("/get-posts");

      setPosts(data.data);

      return posts;
    } catch (error) {
      return alert(error);
    }
  }

  function OnePost(id) {
    try {
      localStorage.setItem("id-post", id);

      navigate("/profile");

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
        width: "100%",
      }}
    >
      {/* <Navbar style={{ position: "fixed", top: "0%", left: "0%" }} /> */}
      {/* <ContainerNavBarleft> */}
      {/* <NavbarLeft /> */}
      {/* <div> */}
      <Navbar />
      <Container>
        <StartCarousel />

        <Grid>
          {posts.map((items) => {
            return (
              <ContainerPosts key={items.id}>
                <p>
                  <SpanTitle>{items.title}</SpanTitle>
                </p>
                <Imagem src={items.image} alt="imagem" />
                <Desc>
                  <span>{items.description}</span>
                </Desc>
                <Button onClick={() => OnePost(items.id)}> LEIA MAIS</Button>
              </ContainerPosts>
            );
          })}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
