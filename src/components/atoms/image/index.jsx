import React from 'react'

const Image = ({ alt, classess, source }) => (
  <img alt={ alt } className={ classess } src={ `${ source }` } />
)

export default Image