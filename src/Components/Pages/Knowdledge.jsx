import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { KnodledgeItem } from '../Molecules/KnowledgeItem'

export const Knowdledge = () => (
  <Row className='animated fade--in'>
    <Col md={2}>
      <KnodledgeItem icon='gulp' />
    </Col>
    <Col md={2}>
      <KnodledgeItem icon='vue' />
    </Col>
  </Row>
)