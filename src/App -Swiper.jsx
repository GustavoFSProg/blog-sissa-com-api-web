// import { useEffect, useState } from "react";
// import api from "./api";
import Navbar from "./components/Navbar/Navbar";
import styled from "styled-components";
import NavbarLeft from "./components/NavbarLeft/NavbarLeft";
import carne from '../src/assets/carne.jpg'
import burger from '../src/assets/hamburger.jpg'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


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
    width: 250px;
  }
`;


const Text = styled.p`
  display: flex;
  width: 600px;
  font-family: 'Poppins';
  font-size: 16px;
  
  margin-right: 18px;
  @media screen and (max-width: 800px) {
    width: 115%;
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

function App() {
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
        overflowX: 'hidden',
      }}
    >
      <Navbar style={{position: 'fixed', top:'0%', left: '0%' }}/>
      {/* <ContainerNavBarleft> */}
        {/* <NavbarLeft /> */}
        <Container>
          <br />
            
     <Swiper 
              spaceBetween={3}
                   centeredSlides={true}
                   autoplay={{
                     delay: 4500,
                     disableOnInteraction: false,
                   }}
                   pagination={{
                     clickable: true,
                   }}
                   navigation={true}
                   modules={[Autoplay, Pagination, Navigation]}
                  //  modules={[Pagination, Navigation]}
                   className="slide-item"
                   style={{width: '46vw', background: 'green'}}
                 >
                  <Views>

                   <SwiperSlide style={{width: '100%', height:"200px"}}><img src={carne}  alt="slcider" /></SwiperSlide>
                   <SwiperSlide style={{width: '100vw', height:"200px"}}><img src={burger} alt="slcider" /></SwiperSlide>
                   {/* <SwiperSlide style={{width: '100vw', height:"200px"}}><img src={carne}  alt="slcider" /></SwiperSlide> */}
                   {/* <SwiperSlide><img src={carne} Style={{width: '100%'}} alt="slcider" /></SwiperSlide>
                   <SwiperSlide><img src={carne} width="200" alt="slcider" /></SwiperSlide>
                   <SwiperSlide><img src={carne} width="200" alt="slcider" /></SwiperSlide>
                   */}
                   </Views>
                 </Swiper>
               

          <DivdoMeio>
            {/* {posts.map((items) => { */}
              {/* return ( */}
                {/* <Card key={items.id}> */}
                <Card>
                  <div style={{ display: "flex", 
                     padding: '15px',
                    flexDirection: "column" }}>
                    <h1 style={{color: '#ec521E', width: '250px'}} >
                      Bife Acebolado
                    </h1>
                    
                    <div style={{width: '50px'}}>

                      <Image  src={carne}  alt="imagem" />
                    </div>
                    <Text >
                      Loren Ipsun Loren IpsunLoren IpsunLoren IpsunLoren Ipsun
                      Loren IpsunLoren IpsunLoren IpsunLoren IpsunLoren Ipsun
                      Loren IpsunLoren IpsunLoren IpsunLoren IpsunLoren Ipsun
                      Loren IpsunLoren IpsunLoren IpsunLoren IpsunLoren Ipsun
                      Loren IpsunLoren IpsunLoren IpsunLoren IpsunLoren 
                      IpsunLoren IpsunLoren Ipsun
                      Loren Ipsun Loren IpsunLoren IpsunLoren IpsunLoren Ipsun
                      Loren IpsunLoren IpsunLoren IpsunLoren IpsunLoren Ipsun
                      Loren IpsunLoren IpsunLoren IpsunLoren IpsunLoren Ipsun
                      Loren IpsunLoren IpsunLoren IpsunLoren IpsunLoren Ipsun
                      Loren IpsunLoren IpsunLoren IpsunLoren IpsunLoren 

                    </Text>
                    <p style={{fontSize: '17px'}}>Autor: Sieley Coelho</p>
                  </div>
                </Card>


                <Card style={{ marginLeft: '16px'}}>
                  <div style={{ display: "flex", 
                     padding: '15px',
                    flexDirection: "column" }}>
                    <h1 style={{color: '#ec521E', width: '200px'}} >Frango Assado</h1>
                    
                    <div style={{width: '50%'}}>

                      <Image  src={carne}  alt="imagem" />
                    </div>
                    <Text >
                    Loren Ipsun Loren IpsunLoren IpsunLoren IpsunLoren Ipsun
                      Loren IpsunLoren IpsunLoren IpsunLoren IpsunLoren Ipsun
                      Loren IpsunLoren IpsunLoren IpsunLoren IpsunLoren Ipsun
                      Loren IpsunLoren IpsunLoren IpsunLoren IpsunLoren Ipsun
                      Loren IpsunLoren IpsunLoren IpsunLoren IpsunLoren 
                      IpsunLoren IpsunLoren Ipsun
                      Loren Ipsun Loren IpsunLoren IpsunLoren IpsunLoren Ipsun
                      Loren IpsunLoren IpsunLoren IpsunLoren IpsunLoren Ipsun
                      Loren IpsunLoren IpsunLoren IpsunLoren IpsunLoren Ipsun
                      Loren IpsunLoren IpsunLoren IpsunLoren IpsunLoren Ipsun
                      Loren IpsunLoren IpsunLoren IpsunLoren IpsunLoren 
                    </Text>
                    <p style={{fontSize: '17px'}}>Autor: Gustavo Sohne</p>
                  </div>
                  <br />
                </Card>
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
