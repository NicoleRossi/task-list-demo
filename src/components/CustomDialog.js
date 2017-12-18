import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  rootStyle: {
    minWidth: '500px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '14px 20px 12px 20px',
    alignItems: 'center',
    minHeight: '39px',
    width: 'fitContent',
    position: 'fixed',
    right: '40px',
    bottom: '190px'
  }, 
  messageStyle: {
    size: '13px',
    maxWidth: '435px',
    maxHeight: '50px',
    overflow: 'scroll'
  },
  closeBtnStyle: {
    cursor: 'pointer'
  }
}

const CustomDialog = ({
  children,
  onCloseClick,
  backgroundColor,
  textColor,
  closeImgURL,
  closeImgAltText
}) => {
  return (
    <div style={{ ...styles.rootStyle, borderColor: textColor, backgroundColor }}>
      <div style={{
          ...styles.messageStyle,
          color: textColor
      }}>
        {children}
      </div>
      <img
        style={styles.closeBtnStyle}
        src={closeImgURL}
        alt={closeImgAltText}
        width='25'
        height='25'
        onClick={onCloseClick}
      />
    </div>
  )
}

CustomDialog.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  closeImgURL: PropTypes.string.isRequired,
  closeImgAltText: PropTypes.string.isRequired
}

export default CustomDialog