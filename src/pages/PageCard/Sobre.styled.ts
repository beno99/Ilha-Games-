'use client'

import styled from 'styled-components';
import Image from 'next/image';

// export const StyledContainer = styled.div`
//   width: 100%;
//   height: 995px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
//   background-color: #192b46;
//   top: 0;

// `

// export const ContainerTextSobre = styled.div`
//   Flex: 1;
//   font-size: 1.5em;
//   margin-left: 79px;
//   width: 438px;
//   height: 460px;
//   background: #ffffff;
// `

// export const TextConttentH1 = styled.h1`
//  color: #F15A29;
//   font-size: 38px;
//   font-weight: 800;
// `


// export const StyledContainer = styled.div`
//   position: relative;
//   width: 100%;
//   height: 95px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
//   background-color: #192b46;

//   @media (max-width: 768px) {
//     height: auto;
//     padding: 20px;
//   }

//   @media (max-width: 480px) {
//     height: auto;
//     padding: 10px;
//   }
// `;


export const Title = styled.h1`
  position: relative;
  color: #F15A29;
  font-size: 38px;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* width: 1281px; */
  height: 588px;
  z-index: 2;
  /* background-color: #14202f; */
  border-radius: 27px;
  /* margin-top: 300px; */
  margin: 55px auto;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    height: auto;
    padding: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const TextContent = styled.div`
  flex: 1;
  font-size: 1.5em;
  /* margin-left: 79px; */
  width: 438px;
  height: 460px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    height: auto;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const TextContentH1 = styled.h1`
  color: #ffff;
  font-size: 38px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const TextContentP = styled.p`
  font-size: 24px;
  color: white;
  margin-top: 20px;
  font-weight:200 ;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-top: 10px;
  }
`;

export const TextContentspan = styled.span`
 font-size: 24px;
  color: white;
  margin-top: 22px;
  font-weight: 900 ;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-top: 10px;
  }

`

export const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 20px 0;
  }

  @media (max-width: 480px) {
    padding: 10px 0;
  }
`;

export const ResponsiveImage = styled(Image)`
  max-width: 100%;
  height: auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 60%;
  }

  @media (max-width: 480px) {
    max-width: 60%;
  }
`;