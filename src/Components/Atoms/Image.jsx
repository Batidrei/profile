import React from 'react'

const Image = ({ text, classess, source }) => (
  <img alt={ text } className={ classess } src={ `${ source }` } />
)

export default Image