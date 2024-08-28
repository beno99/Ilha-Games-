'use client'

import styled from 'styled-components';



export const StyledHeader = styled.header`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 81px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  border-radius: 25px;
  top: 20px;
  position: sticky;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 99999999999999999999999999999999999999999999;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1292px;
  margin: 0 auto;
  padding: 0 1rem;

  /* Responsivo para tablet */
  @media (max-width: 1024px) {
    justify-content: space-between;
    padding: 0 2rem;
  }

  /* Responsivo para celular */
  @media (max-width: 390px) {
    flex-direction: column;
    padding: 1rem;
    text-align: center;
  }
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 10.938rem;
  margin: 0;

  /* Responsivo para tablet */
  @media (max-width: 1024px) {
    gap: 5rem;
    display: none !important;
  }
  @media (max-width: 390px) {
    display: none !important;
  }
`;

export const StyledLi = styled.li`
  margin: 0;
`;

export const StyledLink = styled.a`
  color: #000000;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: 0.5s;
  /* display: flex; */
  font-size: larger;

  &:hover {
    color: #fb6c1e;
    transition: 0.5s;
  }

  /* Responsivo para tablet */
  @media(max-width: 768px) {
    font-size: 2.1rem;
    font-weight: bold;

  }  

  @media (max-width: 390px) {
    font-size: 0.875rem;
    display: none;
   
  }
`;

export const StyledButton = styled.button`
  background: linear-gradient(0.25turn, #000000, #363535, #363535, #000000);
  border-radius: 22px;
  width: 182px;
  height: 37px;
  border: none;
  color: white;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  padding: 2px;
  font-weight: 500;

  /* Responsivo para tablet */
  @media (max-width: 1024px) {
    width: 150px;
    height: 35px;
  }

  /* Responsivo para celular */
  @media (max-width: 390px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
  }
`

