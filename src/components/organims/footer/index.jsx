import React from 'react'
import styled from 'styled-components';

const ContainerFooter = styled.footer`
  padding: 49px 0;
`;

export const Footer = () => (
  <ContainerFooter className='d-flex align-items-center justify-content-center flex-wrap bg-white'>
    <a href='https://www.linkedin.com/in/alex-andrei/' rel="noopener noreferrer" target="_blank">
      <img alt="" className='mb-3' src={require("../../../Assets/icons/icon-linkedin.svg")} />
    </a>
    <small className='text-center w-100'>Copyrigh © 2025. Design with <span aria-label='Blue heart' role="img">💙</span></small>
  </ContainerFooter>
)