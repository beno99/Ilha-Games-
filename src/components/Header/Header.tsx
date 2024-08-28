"use client";

import React from "react";
import Image from "next/image";
import Logo from "../../assets/WhatsApp Image 2024-08-24 at 11.46.30 2.svg";
import {
  StyledHeader,
  StyledUl,
  StyledLi,
  StyledLink,
  StyledButton,
  StyledContainer,
} from "./Header.styled";

export function Header() {

  return (
    <StyledHeader>
      <StyledContainer>
        <div>
          <Image className="object-cover" src={Logo} alt="Logo" />
        </div>
        <StyledUl>
          <StyledLi>
            <StyledLink href="#Sobre">Lançamento</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink href="#Jogos">Sobre</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink href="#LinhadoTempo">Contato</StyledLink>
          </StyledLi>
        </StyledUl>

        <StyledButton>ENTRE EM CONTATO</StyledButton>
      </StyledContainer>
    </StyledHeader>
  );
}
