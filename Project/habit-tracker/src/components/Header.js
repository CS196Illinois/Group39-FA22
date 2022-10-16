import PropTypes from 'prop-types'

// Return header of title name
const Header = ({ title }) => {
  return (
    <p className='head'>
        <h1>{title}</h1>
    </p>
  )
}

// Default param input
Header.defaultProps = {
    title: 'Header Placeholder',
}

// Makes component expect a string
// Will give error in console
Header.propTypes = {
    title: PropTypes.string,
}

export default Header