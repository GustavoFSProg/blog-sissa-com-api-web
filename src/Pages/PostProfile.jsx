import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../api";
import Navbar from "../components/Navbar/Navbar";
import { AiTwotoneLike } from "react-icons/ai";

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
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: #b30000;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
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
  width: 400px;
  height: 300px;

  @media screen and (max-width: 800px) {
    width: 300px;
    height: 200px;
  }
`;

const Desc = styled.p`
  width: 58%;
  text-indent: 25px;
  line-height: 28px;
  font-size: 17px;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

function PostProfile() {
  const [posts, setPosts] = useState({});

  async function OnePost() {
    try {
      const id = localStorage.getItem("id-post");
      const { data } = await api.get(`/post/${id}`);

      setPosts(data);

      // console.log(id);

      return posts;
    } catch (error) {
      return alert(error);
    }
  }
  // console.log(posts);

  useEffect(() => {
    OnePost();
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
        <br />
        {/* <h2>POST</h2> */}

        <ContainerPosts key={posts.id}>
          <p>
            <span style={{ fontSize: "32px" }}>{posts.title}</span>
          </p>
          <Imagem src={posts.image} alt="imagem" />
          <Desc>
            <span>{posts.text}</span>
          </Desc>
        </ContainerPosts>
        <div style={{ display: "flex", alignItems: "center" }}>
          <AiTwotoneLike
            style={{ color: "blue", marginRight: "3px" }}
            fontSize="30px"
          />
          <p style={{ fontSize: "16px" }}>1</p>
        </div>
      </Container>
    </div>
  );
}

export default PostProfile;
