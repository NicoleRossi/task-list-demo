import React from 'react'
import PropTypes from 'prop-types'
import CustomDialog from './CustomDialog'

const InfoDialog = ({ children, onCloseClick }) => {
  return (
    <CustomDialog
      onCloseClick={onCloseClick}
      backgroundColor='#f6fffb'
      textColor='#5ac597'
      closeImgURL='./images/close_info.svg'
      closeImgAltText='dismiss info'
    >
      {children}
    </CustomDialog>
  )
}

InfoDialog.propTypes = {
  onCloseClick: PropTypes.func.isRequired
}

export default InfoDialog