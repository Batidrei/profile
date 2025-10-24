import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContainerFullH = styled(Container)`
  min-height: 100%;
`;

const ButtonError = styled(Button)`
  margin-left: auto;

  @media (max-width: 600px) {
    width: 100%;
  }
`


export const error404 = () => (
  <ContainerFullH className='d-flex align-items-center justify-content-evenly flex-wrap flex-column'>
    <Row className='w-100 align-items-center'>
      <Col className='d-none d-md-block' md={4}>
        <img alt="Error 404" className='img-fluid w-100' src={require("../../../Assets/Images/ufo404.svg").default} />
      </Col>/
      <Col>
        <h2 className='text-center text-md-end'>Whoops!</h2>
        <p className='text-center text-md-end'>Something went wrong.</p>
        <Link to={'/'}>
          <ButtonError className='d-block' variant='outline-primary'>Go back</ButtonError>
        </Link>
      </Col>
    </Row>
    <Row className='w-100'>
      <Col>
        <img alt="Error 404" className='img-fluid w-100 d-none d-sm-block' src={require("../../../Assets/Images/error404.svg").default} />
        <img alt="Error 404" className='img-fluid w-100 d-block d-sm-none' src={require("../../../Assets/Images//error404Mobile.svg").default} />/
      </Col>
    </Row>
  </ContainerFullH>
)