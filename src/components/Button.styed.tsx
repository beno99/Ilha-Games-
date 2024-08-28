'use client';

import styled from "styled-components"

export const GlobalButton = styled.button`
  display: flex ;
  align-items: center;
  padding: 4% ; 
  background-image: linear-gradient(45deg, rgb(255, 174, 0), rgb(240, 101, 25), rgb(222, 40, 46));
  border-radius: 40px;
  width: 191px;
  height: 56px;
  border: none;
  color: white;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;

  &:hover{
    background-image: linear-gradient(45deg, rgb(255, 72, 0), rgb(240, 25, 25), rgb(222, 92, 40));
    transition: transform 0.5s ease-in-out;

  }
  span {
    font-size: 17px; 
    font-weight: bold;
  }

  @media (max-width: 768px) {
    height: 40px;
    width: 175px;
  }
  `