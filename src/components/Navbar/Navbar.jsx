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
  background: white;
  /* background: #ffffe6; */
  /* 
  background-image: linear-gradient(
    to right,
    #80ffdf,
    #a3c2b4,
    #95bdab,
    #698578  ) */

  @media screen and (max-width: 800px) {
    width: 79%;
    margin-top: -90px;

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
    margin-top: -15px;
  }
`;

const IconSeta = styled.div`
  display: flex;
  margin-left: 12px;

  @media screen and (max-width: 800px) {
    /* margin-left: -178px; */
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-family: Emilys Candy;
  flex-direction: row;
  color: #b30000;
  font-size: 32px;
  margin-left: -2px;
  margin-top: -15px;

  @media screen and (max-width: 800px) {
    margin-top: 35px;
    margin-left: 0px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  width: 302px;
  height: auto;
  align-items: center;
  justify-content: space-between;
  /* background: "green"; */
  margin-left: -360px;

  @media screen and (max-width: 800px) {
    display: flex;

    margin-top: 290px;
    margin-left: -282px;
    width: auto;
    /* background: green; */

    /* margin-left: 80px; */
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
    padding-right: 30px;
  }
`;

const SpanTitle = styled.span`
  font-size: 13px;
  color: #206040;
  margin-top: 2px;
  width: 6rem;

  @media screen and (max-width: 800px) {
    width: 6rem;
  }
`;

const ImgLogo = styled.img`
  width: 330px;

  @media screen and (max-width: 800px) {
    /* width: 100px; */
  }
`;

const FotoRosto = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    margin-left: -70px;
  }
`;

const FotoReceitas = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    margin-left: 30px;
  }
`;

const FotoGaleria = styled.div`
  display: flex;
  width: 50%;
  height: 10%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 15px;

  @media screen and (max-width: 800px) {
    margin-left: 40px;
  }
`;

const Menu = styled.div`
  display: flex;
  margin-left: 30px;

  @media screen and (max-width: 800px) {
    margin-left: -75px;
    margin-top: -130px;
    position: "absolute";
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
          <Logo>
            <Link to="/">
              <ImgLogo src={logo} alt="logo" />
            </Link>
            {/* <IconSeta>
              <ImSpoonKnife style={{ fontSize: "23px", color: "#800000" }} />
            </IconSeta> */}
          </Logo>
        </Link>
        {/* <hr
          style={{
            width: "100%",
            marginLeft: "-130px",
            marginTop: "70px",
            height: "2",
            background: "green",
          }}
        /> */}
        <LinksContainer>
          <FotoRosto>
            <img
              src={foto}
              alt="foto"
              width="42"
              style={{
                borderRadius: "100%",
                border: "1px solid green",
              }}
            />
            <SpanTitle>Minha História</SpanTitle>
          </FotoRosto>
          <Link
            to="/receitas"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <FotoReceitas
              style={
                {
                  // marginLeft: "10px",
                }
              }
            >
              <img
                src={colher}
                alt="foto"
                width="40"
                height="40"
                style={{
                  borderRadius: "100%",

                  border: "1px solid green",
                }}
              />
              <span
                style={{
                  fontSize: "13px",
                  color: "#206040",

                  marginTop: "5px",
                }}
              >
                Receitas
              </span>
            </FotoReceitas>
          </Link>

          <FotoGaleria>
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
                marginLeft: "-10px",
              }}
            >
              <FaCameraRetro style={{ fontSize: "22px" }} />
            </div>
            <SpanTitle
              style={{
                fontSize: "13px",
                marginLeft: "-5px",
                color: "#206040",
              }}
            >
              Galeria de fotos
            </SpanTitle>
          </FotoGaleria>
          {/* <img
            src={circulo}
            alt="foto"
            width="88"
            style={{ borderRadius: "100%" }}
          /> */}
        </LinksContainer>
        <Menu>
          <BasicMenu />
        </Menu>
      </Container>
    </Wrapper>
  );
}

export default Navbar;
