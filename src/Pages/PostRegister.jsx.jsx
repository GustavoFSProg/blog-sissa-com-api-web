// import { useEffect, useState } from "react";
// import api from "./api";
import styled from "styled-components";
import fundo from "../assets/fundoA.jpeg";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import api from "../api";
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

const Button = styled.button`
  display: flex;
  width: 100%;
  height: auto;
  /* background: #e6e6e6; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  margin-top: 4px;
  transition: all 1s;
  border-radius: 7px;
  border: 1px solid gray;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    background: gray;
    color: yellow;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    /* margin-left: 6px; */
    margin-bottom: -30px;
  }
`;

const Input = styled.input`
  display: flex;
  width: 95%;
  height: auto;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  border: 1px solid gray;

  @media screen and (max-width: 800px) {
  }
`;

function PostRegister() {
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  async function CreatePost(e) {
    try {
      e.preventDefault();
      const data = new FormData();

      if (
        !image |
        (title === "") |
        (text === "") |
        (description === "") |
        (author === "")
      ) {
        alert("Preehncha os campos");
      }

      data.append("image", image);
      data.append("title", title);
      data.append("text", text);
      data.append("description", description);
      data.append("author", author);

      await api.post("/create-post", data);

      return alert("Post criado com sucesso!!");
    } catch (error) {
      return alert(error);
    }
  }

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

        <h1
          style={{
            color: "#b30000",
          }}
        >
          Cadastro de Post
        </h1>

        <div>
          {/* <form
            onSubmit={CreatePost}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          > */}
          <span>Imagem:</span>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <Input
            type="text"
            value={title}
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            value={text}
            placeholder="Texto"
            onChange={(e) => setText(e.target.value)}
            cols="54"
            rows="13"
            style={{ padding: "10px" }}
          />

          <Input
            type="text"
            value={description}
            placeholder="Descrição"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Input
            type="text"
            value={author}
            placeholder="Autor"
            onChange={(e) => setAuthor(e.target.value)}
          />

          {/* <Button type="submit">Cadastrar</Button> */}
          {/* </form> */}
        </div>

        <br />
      </Container>
    </div>
  );
}

export default PostRegister;
