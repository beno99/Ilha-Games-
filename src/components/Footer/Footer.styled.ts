'use client'

import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: #fff;
  color: black;
  padding: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
`;

export const FooterContent = styled.div`  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 992px;
  align-items: flex-start;
  width: 100%;
 

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const FooterColumn = styled.div`
  flex: 1;
  padding: 76px 20px;
  

  @media (max-width: 768px) {
    padding: 20px 0;
    text-align: center;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const FooterText = styled.p`
  margin-bottom: 10px;
`;

export const FooterTitle = styled.h3`
  margin-bottom: 15px;
  font-weight: 800;
`;

export const FooterLink = styled.a`
  display: block;
  margin-bottom: 10px;
  color: black;
  text-decoration: none;

  &:hover {
    color: #FB6C1E;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    margin: 5px 10px;
    white-space: nowrap;
  }
`;

export const FooterDivider = styled.hr`
  width: 992px;
  border: 0;
  border-top: 1px solid #000;
  margin: 20px 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CopyrightContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 992px;
  padding: 10px 0;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
  }
`;

export const CopyrightText = styled.p`
  margin: 0;
  padding: 0 10px;
  text-align: center;
  font-size: 13px;
  color: #000;
`;

export const ContentIconsAll = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 154px;
  height: 32px;
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const IconContainer = styled.div`
  font-size: 27px;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #FB6C1E;
    transition: 0.3s;
  }
`;

export const FooterIconLink = styled.a`
  font-size: 27px;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #FB6C1E;
    transition: 0.3s;
  }
`;
