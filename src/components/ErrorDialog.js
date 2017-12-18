import React from 'react'
import PropTypes from 'prop-types'
import CustomDialog from './CustomDialog'

const ErrorDialog = ({ children, onCloseClick }) => {
  return (
    <CustomDialog
      onCloseClick={onCloseClick}
      backgroundColor='#fff5f5'
      textColor='#c4545a'
      closeImgURL='./images/close_error.svg'
      closeImgAltText='dismiss error'
    >
      {children}
    </CustomDialog>
  )
}

ErrorDialog.propTypes = {
  onCloseClick: PropTypes.func.isRequired
}

export default ErrorDialog
