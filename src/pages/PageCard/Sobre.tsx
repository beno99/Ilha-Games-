"use client";

import * as S from "./Sobre.styled";
import Sobreimg from "../../assets/sobreCeo.svg";

export function Sobre() {
  return (
    // <S.StyledContainer id="Equipe">
      <S.ContentWrapper>
        <S.TextContent>
          <S.TextContentH1>Nós somos a Ilha Games!</S.TextContentH1>
          <S.TextContentP>
            A Ilha Games Studio é uma empresa inovadora que oferece jogos
            educativos para todas as idades. Combinamos diversão e educação,
            utilizando tecnologias de ponta para promover o aprendizado eficaz.
          </S.TextContentP>
          <S.TextContentspan>
          &quot; Nossos jogos são usados em escolas, empresas e lares, transformando
            a maneira como as pessoas aprendem. &quot;
          </S.TextContentspan>
        </S.TextContent>
        <S.ImageContent>
          <S.ResponsiveImage
            src={Sobreimg}
            width={379}
            height={460}
            alt="imagem"
          />
        </S.ImageContent>
      </S.ContentWrapper>
    // </S.StyledContainer>
  );
}
