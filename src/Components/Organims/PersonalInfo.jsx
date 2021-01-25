import React from 'react'
import Image from '../Atoms/Image'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const PersonalInfo = () => (
  <div className='py-sm-5 py-sm-5'>
    <h1>About me</h1>
    <Row className='align-items-center flex-column-reverse flex-sm-row'>
      <Col md={6}>
        <Card className='border-0' text='white'>
          <Card.Body className='p-3'>
            <Card.Text>
              <h4>Hi, my name is <span className='mr-1 text-primary'>Alex Andrei</span></h4>
              <p className='mb-0'><span aria-label='' role='img'>👨‍💻</span> I'm a UI & frontend developer with more 4 years of experience, specialized in frontend. I don’t work under pressure, i work with passion.
              <br />
                <br />
                <span aria-label='' role='img'>🎓</span> Information systems.
              <br />
                <span aria-label='' role='img'>🏫</span> Universidad de Guadalajara
              <br />
                <span aria-label='' role='img'>📧</span> <a href='mailto:bastidaflores@gmail.com'>bastidaflores@gmail.com</a>
                <br />
                <span aria-label='' role='img'>📱</span> <a href='tel:+52 1 33 2081 8592'>+52 1 33 2081 8592</a></p>
              <Link exact='true' to='https://alexandrei04.github.io/assets/files/CV_Alex_Andrei_Frontend.pdf'>
                <Button className={'d-block d-sm-inline-block mt-3 mx-auto ' + (document.documentElement.clientWidth <= 500 ? 'w-100' : '')} variant='primary'>Download resume</Button>
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={{ span: 4, offset: 2 }} className='pb-3 pb-sm-0'>
        <Image
          alt='Profile image'
          classess='image-profile img-fluid z-1 px-5'
          source={require('../../Assets/Images/image-profile.png')}
        />
      </Col>
    </Row>
  </div>
)
