// import logo from "../../assets/logo-sissa-bom.png";
// import fundo from "../../assets/fundoAmarelo.jpeg";
import { GiSpoon } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";

import styled from "styled-components";
import BasicMenu from "../BasicMenu";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-zipado.jpeg";
import foto from "../../assets/foto.jpeg";
import colher from "../../assets/colher.jpeg";
import circulo from "../../assets/circo-branco.jpeg";
import { FaCameraRetro } from "react-icons/fa";
import { height } from "@mui/system";

const Image = styled.img`
  display: flex;
  width: 240px;
  border-radius: 7px;

  margin-right: 18px;

  @media screen and (max-width: 800px) {
    width: 190px;
    margin-left: -15px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  /* background: #f2f2f2; */
  background: #ffffe6;
  /* 
  background-image: linear-gradient(
    to right,
    #80ffdf,
    #a3c2b4,
    #95bdab,
    #698578  ) */

  @media screen and (max-width: 800px) {
    width: 79%;
    margin-top: -100px;

    /* background-image: linear-gradient(to right, #80ffdf, #a3c2b4, #698578); */
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 90vw;
  height: auto;
  justify-content: center;
  align-items: center;
  color: black;
  /* background: #80ffdf; */
  background: #e6e6e6;
  font-family: Roboto;
  overflow-x: hidden;

  @media screen and (max-width: 800px) {
    width: 118%;
  }
`;

const IconSeta = styled.div`
  display: flex;
  margin-left: 12px;

  @media screen and (max-width: 800px) {
    /* margin-left: -178px; */
  }
`;

const LinksContainer = styled.div`
  display: flex;
  width: 302px;
  height: auto;
  align-items: center;
  justify-content: space-between;
  background: "green";
  /* margin-left: -250px; */

  @media screen and (max-width: 800px) {
    margin-top: 300px;
    margin-left: -180px;
    /* width: 800px; */
    /* margin-left: 80px; */
    justify-content: space-between;
    align-items: center;
  }
`;

const ImgLogo = styled.img`
  width: 330px;

  @media screen and (max-width: 800px) {
    width: 200px;
  }
`;

function Navbar() {
  return (
    <Wrapper>
      <Container>
        {/* <div>
          <Image alt="logo" src={logo} />
        </div> */}
        <Link to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "Emilys Candy",
              flexDirection: "row",
              color: "#b30000",
              fontSize: "32px",
              marginLeft: "-2px",
            }}
          >
            <Link to="/">
              <ImgLogo src={logo} alt="logo" />
            </Link>
            {/* <IconSeta>
              <ImSpoonKnife style={{ fontSize: "23px", color: "#800000" }} />
            </IconSeta> */}
          </div>
        </Link>

        <LinksContainer>
          <div
            style={{
              display: "flex",
              with: "100%",
              height: "auto",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={foto}
              alt="foto"
              width="45"
              style={{
                borderRadius: "100%",

                border: "1px solid green",
              }}
            />
            <span style={{ fontSize: "13px", color: "#206040" }}>
              Minha História
            </span>
          </div>

          <div
            style={{
              display: "flex",
              with: "50%",
              height: "auto",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginLeft: "28px",
            }}
          >
            <img
              src={colher}
              alt="foto"
              width="45"
              height="45"
              style={{
                borderRadius: "100%",

                border: "1px solid green",
              }}
            />
            <span style={{ fontSize: "13px", color: "#206040" }}>Receitas</span>
          </div>

          <div
            style={{
              display: "flex",
              with: "30%",
              height: "10%",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginLeft: "28px",
            }}
          >
            <div
              style={{
                display: "flex",
                with: "30%",
                height: "10%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginLeft: "28px",
                borderRadius: "100%",
                // background: "green",
                border: "1px solid green",
                padding: "10px",
                marginLeft: "-5px",
              }}
            >
              <FaCameraRetro style={{ fontSize: "25px" }} />
            </div>
            <span
              style={{
                fontSize: "13px",
                marginLeft: "-5px",
                color: "#206040",
              }}
            >
              Galeria de fotos
            </span>
          </div>
          {/* <img
            src={circulo}
            alt="foto"
            width="88"
            style={{ borderRadius: "100%" }}
          /> */}
        </LinksContainer>
        {/* <div
          style={{ display: "flex", marginRight: "800px", background: "green" }}
        > */}
        <BasicMenu />
        {/* </div> */}
      </Container>
    </Wrapper>
  );
}

export default Navbar;
