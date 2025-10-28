import React from 'react'
import Image from '../../atoms/image'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { CardItem } from '../cardItem';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal'

import pDesign1 from '../../../Assets/patterns/pattern-design-1.svg'
import pDesign2 from '../../../Assets/patterns/pattern-design-2.svg'

const ContainerImages = styled.div`
  margin: 149px 0;
`;

const ContainerDesign = styled.div`
  position: relative;

  &::before {
    background: url('${pDesign1}');
    content: '';
    height: 299px;
    left: 1rem;
    position: absolute;
    top: -9rem;
    width: 278px;
  }

  &::after {
    background: url('${pDesign2}');
    content: '';
    height: 41px;
    position: absolute;
    right: 0;
    width: 130px;
  }
`;

const Container2 = styled.div`
  animation: scroll 20s linear infinite;
  width: max-content;

  @keyframes scroll {
    to {
      transform: translateX(-50%);
    }
  }
`;

export const PersonalInfo = () => (
  <div className='d-flex align-items-center flex-wrap py-smx-5 py-smx-5'>
    <Container id='home'>
      <Row className='flex-column-reverse flex-sm-row align-items-center'>
        <Col md={7}>
          <Fade top>
            <h2 className='text-dark'>Hello!, My name is Alex Andrei</h2>
            <p className='text-dark'>UI Developer (9+ years) specializing in scalable design systems and component libraries. Translate research and Figma prototypes into consistent React, Angular, Drupal experiences, enforce web accessibility.</p>
            <div className="d-flex">

              <a download href='https://drive.google.com/file/d/1gX4uFOTvRMbdiSAVIj8NgeZd4HK4N43X/view?usp=sharing' >
                <Button className={'d-block d-sm-inline-block mt-3 mx-auto ' + (document.documentElement.clientWidth <= 500 ? 'w-100' : '')} variant='outline-primary'>Download resume</Button>
              </a>
              <a href='mailto:bastidaflores@gmail.coim'>
                <Button className={'d-block d-sm-inline-block mt-3 mx-auto text-dark ' + (document.documentElement.clientWidth <= 500 ? 'w-100' : '')} variant='link'>Hire me</Button>
              </a>
            </div>
          </Fade>
        </Col>
        <Col md={{ span: 3, offset: 2 }} className='pb-3 pb-sm-y'>
          <Fade right >
            <Image
              alt='Profile image'
              classess='image-profile img-fluid z-1 d-none d-sm-block'
              source={require('../../../Assets/Images/image-profile.png')}
            />
          </Fade>
        </Col>
      </Row>
    </Container>
    <ContainerImages className='bg-white w-100'>
      <Fade cascade delay={800} duration={2000}>
        <Container2 className='d-flex justify-content-center justify-content-md-between align-items-center bg-white py-5'>
          <img alt="Logo de la Universidad de Guadalajara" className='img-fluid py-3 mx-5' src={require("../../../Assets/Images/icon-udg.png")} />
          <img alt="Logo del Gobierno de Jalisco" className='img-fluid py-3 mx-5' src={require("../../../Assets/Images/icon-jalisco.png")} />
          <img alt="Logo de Derevo" className='img-fluid py-3 mx-5' src={require("../../../Assets/Images/icon-derevo.png")} />
          <img alt="Logo de Kavak" className='img-fluid py-3 mx-5' src={require("../../../Assets/Images/icon-kavak.png")} />
          <img alt="Logo de Zeeto" className='img-fluid py-3 mx-5' src={require("../../../Assets/Images/icon-zeeto.png")} />
          <img alt="Logo de la Universidad de Guadalajara" aria-hidden='true' className='img-fluid py-3 mx-5' src={require("../../../Assets/Images/icon-udg.png")} />
          <img alt="Logo del Gobierno de Jalisco" aria-hidden='true' className='img-fluid py-3 mx-5' src={require("../../../Assets/Images/icon-jalisco.png")} />
          <img alt="Logo de Derevo" aria-hidden='true' className='img-fluid py-3 mx-5' src={require("../../../Assets/Images/icon-derevo.png")} />
          <img alt="Logo de Kavak" aria-hidden='true' className='img-fluid py-3 mx-5' src={require("../../../Assets/Images/icon-kavak.png")} />
          <img alt="Logo de Zeeto" aria-hidden='true' className='img-fluid pb-3 mx-5' src={require("../../../Assets/Images/icon-zeeto.png")}y/>
        </Container2>
      </Fade>
    </ContainerImages>
    <ContainerDesign className='mx-auto' id='design'>
      <Container className='d-flex align-items-center'>
        <Row className='align-items-center flex-wrap-reverse'>
          <Col>
            <Fade left cascade delay={300}>
              <img alt="Página de Do-Co" className='img-fluid' src={require("../../../Assets/Images/doco.png")} />
            </Fade>
          </Col>
          <Col>
            <h2 className='text-md-end'>Better design, better experiencies</h2>
            <p className='text-md-end'>I design clean, accessible interfaces where visual quality meets usability. From contrast and type scales to keyboard flow and semantics, every detail is considered to deliver faster, more inclusive experiences.</p>
          </Col>
        </Row>
      </Container>
    </ContainerDesign>
    <CardItem />
  </div>
)
