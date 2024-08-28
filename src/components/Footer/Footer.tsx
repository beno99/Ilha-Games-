import React from "react";
import * as S from "./Footer.styled";
import Image from "next/image";
import LogoIlha from "../../assets/ilha games studio.svg";
import Oxygeni from "../../assets/oxygeni.svg";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";

export function Footer() {
  return (
    <S.StyledFooter>
      <S.FooterContent>
        <S.FooterColumn>
          <Image
            src={LogoIlha}
            width={86}
            height={86}
            alt="Logo Ilha Games Studio"
          />
        </S.FooterColumn>
        <S.FooterColumn>
          <S.FooterTitle>Descubra</S.FooterTitle>
          <S.FooterLink href="#">Início</S.FooterLink>
          <S.FooterLink href="#">Sobre</S.FooterLink>
          <S.FooterLink href="#">Jogos</S.FooterLink>
          <S.FooterLink href="#">Linha do Tempo</S.FooterLink>
          <S.FooterLink href="#">Equipe</S.FooterLink>
          <S.FooterLink href="#">Contato</S.FooterLink>
        </S.FooterColumn>
        <S.FooterColumn>
          <S.FooterTitle>Links úteis</S.FooterTitle>
          <S.FooterLink href="#">Aritimectis</S.FooterLink>
          <S.FooterLink href="#">Jogo 2</S.FooterLink>
          <S.FooterLink href="#">Jogo 3</S.FooterLink>
          <S.FooterLink href="#">Jogo 4</S.FooterLink>
        </S.FooterColumn>
        <S.FooterColumn>
          <S.FooterTitle>Nossos Parceiros</S.FooterTitle>
          <Image src={Oxygeni} width={128} height={25} alt="Logo Oxygeni" />
        </S.FooterColumn>
      </S.FooterContent>
      <S.FooterDivider />
      <S.CopyrightContainer>
        <S.CopyrightText>
          &copy; Ilha Games Studios. Todos os direitos reservados.
        </S.CopyrightText>
        <S.ContentIconsAll>
          <S.FooterIconLink
            href="https://www.instagram.com/ilhagamesstudio/?hl=pt-br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram />
          </S.FooterIconLink>
          <S.FooterIconLink
            href="https://www.linkedin.com/in/ilha-games-studio-45729a28b/?originalSubdomain=br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin />
          </S.FooterIconLink>
          <S.FooterIconLink
            href="https://www.linkedin.com/in/ilha-games-studio-45729a28b/?originalSubdomain=br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </S.FooterIconLink>
        </S.ContentIconsAll>
      </S.CopyrightContainer>
    </S.StyledFooter>
  );
}
