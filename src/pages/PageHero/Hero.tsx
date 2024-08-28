"use client";
import React from "react";
import AboutImg from "../../assets/Fundoestrelado.png";
import CellImg from "../../assets/LogoIlhagames.svg";
import LogoAri from "../../assets/AritimeticsLogo.svg";
import logoIncode from "../../assets/logoIncode.svg";
import Image from "next/image";
import { GlobalButton } from "../../components/Button.styed";
import {
  StyledAbout,
  StyledImageContainer,
  ContentWrapper,
  TextContainer,
  ImageContainer,
  Container,
  ButtonContainer,
  incodeContainer,
  ContainerTeste,
  NavItem,
} from "../PageHero/Hero.styled";
import { FaGooglePlay } from "react-icons/fa";

export function Hero() {
  return (
    <>
      <StyledAbout>
        <ContentWrapper id="Sobre">
          <TextContainer>
            <StyledImageContainer>
              <Image
                src={AboutImg}
                alt="AboutImg"
                quality={100}
                style={{ width: "100%", height: "100%" }}
              />
            </StyledImageContainer>
            <Container>
              <Image
                src={LogoAri}
                alt="LogoAri"
                quality={100}
                style={{
                  width: "45%",
                  height: "100%",
                }}
              />
              <h1>Novo Lançamento</h1>
              <p>
                Aritimetics é uma coleção de jogos educativos e interativos de
                matemática, que visa ensinar as operações atravez da
                gamificação offline.
              </p>
              <ButtonContainer>
                <GlobalButton>
                  <FaGooglePlay size={36} color="rgba(255,255,255)" />
                  <span style={{ marginLeft: "10px" }}>Baixe agora</span>
                </GlobalButton>

                <Image
                  src={logoIncode}
                  alt="logoIncode"
                  quality={100}
                  style={{
                    width: "25%",
                    height: "80%",
                    margin: "50px",
                  }}
                />
              </ButtonContainer>
            </Container>
          </TextContainer>
          <ImageContainer>
            <Image
              src={CellImg}
              alt="CellImg"
              layout="intrinsic"
              width={181}
              height={379}
              objectFit="cover"
              quality={100}
            />
          </ImageContainer>
        </ContentWrapper>
        <ContainerTeste id="teste">
          <NavItem href="#jogos">JOGOS</NavItem>
          <NavItem href="#inovacao">INOVAÇÃO</NavItem>
          <NavItem href="#tecnologia">TECNOLOGIA</NavItem>
          <NavItem href="#aprendizado">APRENDIZADO</NavItem>
        </ContainerTeste>
      </StyledAbout>
    </>
  );
}



// "use client";
// import React from "react";
// import AboutImg from "../../assets/Fundoestrelado.png";
// import CellImg from "../../assets/LogoIlhagames.svg";
// import LogoAri from "../../assets/AritimeticsLogo.svg";
// import logoIncode from "../../assets/logoIncode.svg";
// import Image from "next/image";
// import { GlobalButton } from "../../components/Button.styed";
// import {
//   StyledAbout,
//   StyledImageContainer,
//   ContentWrapper,
//   TextContainer,
//   ImageContainer,
//   Container,
//   ButtonContainer,
//   incodeContainer,
//   ContainerTeste,
//   NavItem,
// } from "../PageHero/Hero.styled";
// import { FaGooglePlay } from "react-icons/fa";

// export function Hero() {
//   return (
//     <>
//       <StyledAbout>
//         <ContentWrapper id="Sobre">
//           <TextContainer>
//             <StyledImageContainer>
//               <Image
//                 src={AboutImg}
//                 alt="AboutImg"
//                 quality={100}
//                 style={{ width: "100%", height: "100%" }}
//               />
//             </StyledImageContainer>
//             <Container>
//               <Image
//                 src={LogoAri}
//                 alt="LogoAri"
//                 quality={100}
//                 style={{
//                   width: "45%",
//                   height: "100%",
//                 }}
//               />
//               <h1>Novo Lançamento</h1>
//               <p>
//                 Aritimetics é uma coleção de jogos educativos e interativos de
//                 matemática, que visa ensinar as operações através da
//                 gamificação offline.
//               </p>
//               <ButtonContainer>
//                 <GlobalButton>
//                   <FaGooglePlay size={36} color="rgba(255,255,255)" />
//                   <span style={{ marginLeft: "10px" }}>Baixe agora</span>
//                 </GlobalButton>

//                 <Image
//                   src={logoIncode}
//                   alt="logoIncode"
//                   quality={100}
//                   style={{
//                     width: "25%",
//                     height: "80%",
//                     margin: "50px",
//                   }}
//                 />
//               </ButtonContainer>
//             </Container>
//           </TextContainer>
//           <ImageContainer>
//             <Image
//               src={CellImg}
//               alt="CellImg"
//               layout="intrinsic"
//               width={181}
//               height={379}
//               objectFit="cover"
//               quality={100}
//             />
//           </ImageContainer>
//         </ContentWrapper>
//         <ContainerTeste id="teste">
//           <NavItem href="#jogos">JOGOS</NavItem>
//           <NavItem href="#inovacao">INOVAÇÃO</NavItem>
//           <NavItem href="#tecnologia">TECNOLOGIA</NavItem>
//           <NavItem href="#aprendizado">APRENDIZADO</NavItem>
//         </ContainerTeste>
//       </StyledAbout>
//     </>
//   );
// }