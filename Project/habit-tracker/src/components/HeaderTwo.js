import React from 'react'
import PropTypes from 'prop-types'

// Return header of title name
const HeaderTwo = ({ text, name }) => {
  return (
    <p className='head2'>
        <h1>{text + ' ' + name}</h1>
    </p>
  )
}

// Default param input
HeaderTwo.defaultProps = {
    text: 'Place',
    name: 'holder'
}

// Makes component expect a string
// Will give error in console
HeaderTwo.propTypes = {
    text: PropTypes.string,
    name: PropTypes.string
}

export default HeaderTwo;