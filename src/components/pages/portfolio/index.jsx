import React from 'react'
import { Footer } from '../../organims/footer'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Fade } from 'react-awesome-reveal'

export const Portfolio = () => (
  <>
    <Container id='home'>
      <Fade top>
        <h2 className='text-dark'>Experience lab</h2>
        <p className='text-dark'>From brief to usable experience.</p>

        <Row xs={1} md={2} className="g-4 mb-5">
          <Col>
            <Card className='py-0'>
              <Card.Img variant="bottom" src={require("../../../Assets/Images/scoredIt-lab.jpg")} />
              <Card.Body>
                <Card.Title>Scored It</Card.Title>
                <Card.Text>
                  Web development - Drupal CMS
                </Card.Text>
                <a href='https://try.scoredit.com/w?vid=100&zDc=Desktop&zEx=&zVr=CC0000&utm_content=txhsgc&utm_source=testing&zRid=CC' target='_blank' >
                  <Button className={'d-block d-sm-inline-block mx-auto ' + (document.documentElement.clientWidth <= 500 ? 'w-100' : '')} variant='outline-primary'>I want to see</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className='py-0'>
              <Card.Img variant="bottom" src={require("../../../Assets/Images/zodiac-lab.jpg")} />
              <Card.Body>
                <Card.Title>Your Ebook Resources</Card.Title>
                <Card.Text>
                  Web design and development - Drupal CMS
                </Card.Text>
                <a href='https://try.yourebookresource.com/x?zDc=Desktop&zEx=&zVr=EA0000&utm_content=ebr_astrology&utm_source=testing&zRid=EA' target='_blank' >
                  <Button className={'d-block d-sm-inline-block mx-auto ' + (document.documentElement.clientWidth <= 500 ? 'w-100' : '')} variant='outline-primary'>I want to see</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className='py-0'>
              <Card.Img variant="bottom" src={require("../../../Assets/Images/gif-lab.jpg")} />
              <Card.Body>
                <Card.Title>Get It Free</Card.Title>
                <Card.Text>
                  Web design and development - Drupal CMS
                </Card.Text>
                <a href='https://try.scored-ittt.com/aa/IC0011/2?vid=100&zDc=Desktop&zEx=&zVr=IC0011&utm_content=txhsgc&utm_source=testing&zRid=AA&zct=txhsgc' target='_blank' >
                  <Button className={'d-block d-sm-inline-block mx-auto ' + (document.documentElement.clientWidth <= 500 ? 'w-100' : '')} variant='outline-primary'>I want to see</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className='py-0'>
              <Card.Img variant="bottom" src={require("../../../Assets/Images/do-co-lab.jpg")} />
              <Card.Body>
                <Card.Title>Documentos Constructivos Website</Card.Title>
                <Card.Text>
                  Web development - React site
                </Card.Text>
                <a href='https://drive.google.com/file/d/1gX4uFOTvRMbdiSAVIj8NgeZd4HK4N43X/view?usp=sharing' target='_blank' >
                  <Button className={'d-block d-sm-inline-block mx-auto ' + (document.documentElement.clientWidth <= 500 ? 'w-100' : '')} variant='outline-primary'>I want to see</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Fade>
    </Container>
    <Footer />
  </>
)
