import React from 'react'
import { Footer } from '../../organims/footer'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Fade } from 'react-awesome-reveal'

const sites = [
  {
    name: 'Scored It',
    type: 'Web development - Drupal CMS',
    link: 'https://try.scoredit.com/w?vid=100&zDc=Desktop&zEx=&zVr=CC0000&utm_content=txhsgc&utm_source=testing&zRid=CC',
    image: 'scoredIt-lab.jpg'
  },
  {
    name: 'Your Ebook Resources',
    type: 'Web design and development - Drupal CMS',
    link: 'https://try.yourebookresource.com/x?zDc=Desktop&zEx=&zVr=EA0000&utm_content=ebr_astrology&utm_source=testing&zRid=EA',
    image: 'zodiac-lab.jpg'
  },
  {
    name: 'Get It Free',
    type: 'Web design and development - Drupal CMS',
    link: 'https://try.scored-ittt.com/aa/IC0011/2?vid=100&zDc=Desktop&zEx=&zVr=IC0011&utm_content=txhsgc&utm_source=testing&zRid=AA&zct=txhsgc',
    image: 'gif-lab.jpg'
  },
  {
    name: 'Prizies',
    type: 'Web development - Drupal CMS',
    link: 'https://3.prizies.com/n?vid=100&zDc=Desktop&zEx=&zVr=IZ0000&utm_content=pr_wlmt_1000&utm_source=testing&zRid=IZ',
    image: 'prizies-lab.jpg'
  },
  {
    name: 'Documentos Constructivos',
    type: 'Web development - React site',
    link: 'https://do-co.mx/',
    image: 'do-co-lab.jpg'
  },
]

export const Portfolio = () => (
  <>
    <Container id='home'>
      <h2 className='text-dark'>Experience lab</h2>
      <p className='text-dark'>From brief to usable experience.</p>

      <Row xs={1} md={2} className="g-4 mb-5">
        {sites.map((val) => (
          <Fade top>
            <Col key={val.id}>
              <Card className='py-0'>
                <Card.Img alt='' src={require("../../../Assets/Images/" + `${val.image}` + "")} />
                <Card.Body>
                  <Card.Title>{val.name}</Card.Title>
                  <Card.Text>
                    {val.type}
                  </Card.Text>
                  <a aria-label={("Open " + `${val.name}` + " website")} href={val.link} target='_blank' >
                    <Button className={'d-block d-sm-inline-block mx-auto ' + (document.documentElement.clientWidth <= 500 ? 'w-100' : '')} variant='outline-primary'>View site</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Fade>
        ))}
      </Row>
    </Container>
    <Footer />
  </>
)
