// import logo from "../../assets/logo-sissa-bom.png";
// import fundo from "../../assets/fundoAmarelo.jpeg";
import { GiSpoon } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";

import styled from "styled-components";
import BasicMenu from "../BasicMenu";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  justify-content: center;
  padding: 25px;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 79%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  color: black;
  background: #26423b;
  font-family: Roboto;
  overflow-x: hidden;
  color: white;

  @media screen and (max-width: 800px) {
    width: 118%;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <Container>
        <div>Desenvolvedor web - Gustavo Sohne - gustavosohne38@gmail.com</div>
        {/* <div style={{ marginTop: "10px" }}>gustavosohne38@gmail.com</div> */}
      </Container>
    </Wrapper>
  );
}

export default Footer;
