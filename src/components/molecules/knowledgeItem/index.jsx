import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components';
import Image from '../../atoms/image'

const CardContainer = styled(Card)`
  height: 100%;
  max-height: 183px;
  max-width: 183px;
  width: 100%;
`;


export const KnowledgeItem = ({icon}) => (
  <CardContainer className='border-0 mb-3 mb-md-0 bg-white' text='white'>
    <Card.Body className='d-flex align-items-center justify-content-center'>
      <Card.Text>
        <Image
          alt='Profile image'
          classess='img-fluid'
          source={require(`../../../Assets/icons/icon-${icon}.svg`)}
        />
      </Card.Text>
    </Card.Body>
  </CardContainer>
)