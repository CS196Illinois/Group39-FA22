import React from 'react'
import PropTypes from 'prop-types'

const Vector = ({ id, file, alt }) => {
    return <img id={id} src={file} alt={alt}/>
  }

Vector.propTypes = {
    file: PropTypes.string,
    alt: PropTypes
}

export default Vector  // not sure if this should go here but I put it in for the header (from a tutorial)