// import logo from "../../assets/logo-sissa-bom.png";
// import fundo from "../../assets/fundoAmarelo.jpeg";
import { GiSpoon } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";

import styled from "styled-components";
import BasicMenu from "../BasicMenu";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-zipado.jpeg";
import foto from "../../assets/foto.jpeg";
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
  background: white;
  /* 
  background-image: linear-gradient(
    to right,
    #80ffdf,
    #a3c2b4,
    #95bdab,
    #698578  ) */

  @media screen and (max-width: 800px) {
    width: 79%;
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
              <img src={logo} width="330" alt="logo" />
            </Link>
            {/* <IconSeta>
              <ImSpoonKnife style={{ fontSize: "23px", color: "#800000" }} />
            </IconSeta> */}
          </div>
        </Link>

        <div
          style={{
            display: "flex",
            with: "800px",
            height: "auto",
            alignItems: "center",
            justifyContent: "space-between",
            // background: "green",
            marginLeft: "-370px",
          }}
        >
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
              width="58"
              style={{ borderRadius: "100%" }}
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
              src={foto}
              alt="foto"
              width="58"
              style={{ borderRadius: "100%" }}
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
              src={foto}
              alt="foto"
              width="58"
              style={{ borderRadius: "100%" }}
            />
            <span style={{ fontSize: "13px", color: "#206040" }}>
              Minha História
            </span>
          </div>
        </div>

        <BasicMenu />
      </Container>
    </Wrapper>
  );
}

export default Navbar;
