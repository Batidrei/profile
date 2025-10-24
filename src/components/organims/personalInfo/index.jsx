import React from 'react'
import Image from '../../atoms/image'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { CardItem } from '../cardItem';
import styled from 'styled-components';
import { Fade, Zoom, Slide, Flip, Bounce, Roll, Rotate } from 'react-awesome-reveal'

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

export const PersonalInfo = () => (
  <div className='d-flex align-items-center flex-wrap py-sm-5 py-sm-5'>
    <Container id='home'>
      <Row className='flex-column-reverse flex-sm-row align-items-center'>
        <Col md={7}>
          <Fade top>
            <h2 className='text-dark'>Hello!, My name is Alex Andrei</h2>
            <p className='text-dark'>UI Developer (9+ years) specializing in scalable design systems and component libraries. Translate research and Figma prototypes into consistent React, Angular, Drupal experiences, enforce web accessibility.</p>
            <div className="d-flex">

              <a download href='https://batidrei.github.io/Assets/files/CV_Alex_Andrei_EN.pdf' >
                <Button className={'d-block d-sm-inline-block mt-3 mx-auto ' + (document.documentElement.clientWidth <= 500 ? 'w-100' : '')} variant='outline-primary'>Download resume</Button>
              </a>
              <a href='mailto:bastidaflores@gmail.coim'>
                <Button className={'d-block d-sm-inline-block mt-3 mx-auto text-dark ' + (document.documentElement.clientWidth <= 500 ? 'w-100' : '')} variant='link'>Hire me</Button>
              </a>
            </div>
          </Fade>
        </Col>
        <Col md={{ span: 3, offset: 2 }} className='pb-3 pb-sm-0'>
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
        <Container className='d-flex justify-content-center justify-content-md-between align-items-center flex-wrap bg-white py-5'>
          <img alt="Logo de la Universidad de Guadalajara" className='img-fluid pb-3' src={require("../../../Assets/Images/icon-udg.png")} />
          <img alt="Logo del Gobierno de Jalisco" className='img-fluid pb-3' src={require("../../../Assets/Images/icon-jalisco.png")} />
          <img alt="Logo de Derevo" className='img-fluid pb-3' src={require("../../../Assets/Images/icon-derevo.png")} />
          <img alt="Logo de Kavak" className='img-fluid pb-3' src={require("../../../Assets/Images/icon-kavak.png")} />
          <img alt="Logo de Zeeto" className='img-fluid pb-3' src={require("../../../Assets/Images/icon-zeeto.png")} />
        </Container>
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
