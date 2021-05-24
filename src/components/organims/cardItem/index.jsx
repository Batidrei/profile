import React from 'react'
import { KnowledgeItem } from '../../molecules/knowledgeItem'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import pStack2 from '../../../assets/patterns/pattern-stack-2.svg'

const CardContainer = styled.div`
  height: 100%;
  max-height: 183px;
  max-width: 183px;
  width: 100%;
`;

const ContainerStack = styled.div`
  position: relative;

  &::after {
    background: url('${pStack2}') no-repeat;
    content: '';
    height: 501px;
    position: absolute;
    right: 0;
    top: 8rem;
    width: 502px;
  }
`;

const ContainerCard = styled(Container)`
  z-index: 1;
`

export const CardItem = () => (
  <ContainerStack className='mx-auto w-100'>
    <ContainerCard className='py-5 my-5 position-relative' id='favoriteStack'>
      <h2 className='text-center'>Favorite stack</h2>
      <Fade left duration={2000}>
        <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap my-5">
          <KnowledgeItem icon='html' />
          <KnowledgeItem icon='sass' />
          <KnowledgeItem icon='javascript' />
          <KnowledgeItem icon='git' />
          <KnowledgeItem icon='react' />
        </div>
      </Fade>
      <Fade left delay={300} duration={2000}>
        <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap">
          <CardContainer className='d-none d-md-flex align-items-center justify-content-between'>
            <Fade delay={2500}>
              <img alt="Página de Do-Co" className='mx-auto' src={require("../../../assets/patterns/pattern-stack-1.svg").default} />
            </Fade>
          </CardContainer>
          <KnowledgeItem icon='cypress' />
          <KnowledgeItem icon='webpack' />
          <KnowledgeItem icon='figma' />
          <KnowledgeItem icon='smacss' />
        </div>
      </Fade>
    </ContainerCard>
  </ContainerStack>
)
