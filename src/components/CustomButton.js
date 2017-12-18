import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  buttonStyle: {
    padding: 0,
    border: 'none',
    background: 'none'
  }
}

const CustomButton = ({ children, onButtonClick }) => {
  return (
    <button style={styles.buttonStyle} onClick={onButtonClick}>
      {children}
    </button> 
  )
}

CustomButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired
}

export default CustomButton
