import React from 'react'
import Image from '../../atoms/image'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { CardItem } from '../cardItem';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import pDesign1 from '../../../assets/patterns/pattern-design-1.svg'
import pDesign2 from '../../../assets/patterns/pattern-design-2.svg'

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
        <Col md={6}>
          <Fade top>
            <h2 className='text-dark'>Hello!, My name is Alex Andrei</h2>
            <p className='text-dark'>I'm a UI & frontend developer. I’ve been in the information systems market for 5 years. I don’t work under pressure, i work with passion.</p>
            <a download href='https://batidrei.github.io/assets/files/cv_english.pdf' >
              <Button className={'d-block d-sm-inline-block mt-3 mx-auto ' + (document.documentElement.clientWidth <= 500 ? 'w-100' : '')} variant='outline-primary'>Download resume</Button>
            </a>
            <a href='mailto:bastidaflores@gmail.coim'>
              <Button className={'d-block d-sm-inline-block mt-3 mx-auto text-dark ' + (document.documentElement.clientWidth <= 500 ? 'w-100' : '')} variant='link'>Hire me</Button>
            </a>
          </Fade>
        </Col>
        <Col md={{ span: 4, offset: 2 }} className='pb-3 pb-sm-0'>
          <Fade right >
            <Image
              alt='Profile image'
              classess='image-profile img-fluid z-1 d-none d-sm-block'
              source={require('../../../assets/images/image-profile.png').default}
            />
          </Fade>
        </Col>
      </Row>
    </Container>
    <ContainerImages className='bg-white w-100'>
      <Fade cascade delay={800} duration={2000}>
        <Container className='d-flex justify-content-center justify-content-md-between align-items-center flex-wrap bg-white py-5'>
          <img alt="Logo de Derevo" className='img-fluid pb-3' src={require("../../../assets/images/icon-derevo.png").default} />
          <img alt="Logo del Gobierno de Jalisco" className='img-fluid pb-3' src={require("../../../assets/images/icon-jalisco.png").default} />
          <img alt="Logo de EDTeam" className='img-fluid pb-3' src={require("../../../assets/images/icon-edteam.png").default} />
          <img alt="Logo de la Universidad de Guadalajara" className='img-fluid pb-3' src={require("../../../assets/images/icon-udg.png").default} />
        </Container>
      </Fade>
    </ContainerImages>
    <ContainerDesign className='mx-auto' id='design'>
      <Container className='d-flex align-items-center'>
        <Row className='align-items-center flex-wrap-reverse'>
          <Col>
            <Fade left cascade delay={300}>
              <img alt="Página de Do-Co" className='img-fluid' src={require("../../../assets/images/doco.png").default} />
            </Fade>
          </Col>
          <Col>
            <h2 className='text-md-end'>Better design, better experiencies</h2>
            <p className='text-md-end'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugiat odio, numquam nostrum eos porro voluptatem ad qui iure quam ipsam ipsum laborum esse commodi excepturi! Aperiam quam quisquam et.</p>
          </Col>
        </Row>
      </Container>
    </ContainerDesign>
    <CardItem />
  </div>
)
