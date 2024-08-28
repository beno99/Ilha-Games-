'use client'

import { styled } from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: min(100%, 1292px);

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 390px) {
    width: 90%;
  }
`;
