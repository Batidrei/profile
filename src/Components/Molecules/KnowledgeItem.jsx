import React from 'react'
import { Card } from 'react-bootstrap'
import Image from '../Atoms/Image'

export const KnodledgeItem = ({icon}) => (
  <Card className='border-0' text='white'>
    <Card.Body className='p-3'>
      <Card.Text>
        <Image
          alt='Profile image'
          classess='img-fluid'
          source={require(`../../Assets/Icons/icon-${icon}.svg`)}
        />
      </Card.Text>
    </Card.Body>
  </Card>
)