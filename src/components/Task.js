import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { renameTask, deleteTask, focusTask } from '../actions'
import CustomButton from './CustomButton'

const mapStateToProps = state => ({
  task: state
})

const mapDispatchToProps = dispatch => ({
  onRenameTask(id, text) {
    dispatch(renameTask(id, text))
  },
  onDeleteTaskClick(id) {
    dispatch(deleteTask(id))
  },
  onFocusTaskClick(id) {
    dispatch(focusTask(id))
  }
})

const styles = {
  inactiveRootStyle: {
    display: 'flex',
    height: '193px',
    borderRadius: '4px',
    backgroundColor: '#fff',
    marginBottom: '12px',
    paddingLeft: '24px',
    paddingTop: '20px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    cursor: 'pointer',
    boxShadow: '0px 1px #cdcdcf'
  },
  activeRootStyle: {
    display: 'flex',
    height: '193px',
    borderRadius: '4px',
    backgroundColor: '#fff',
    marginBottom: '12px',
    paddingLeft: '24px',
    paddingTop: '20px',
    paddingRight: '24px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    cursor: 'default',
    boxShadow: '0px 1px #cdcdcf'
  },
  textInputStyle: {
    border: 'none',
    width: '100%'
  },
  taskNameStyle: {
    fontSize: '0.85em',
    textTransform: 'uppercase',
    color: '#8b9aa7',
    height: 'fit-content',
    margin: 0
  },
  deleteBtnStyle: {
    marginRight: '22px',
    marginLeft: '10px'
  }
}

const markup = ({ id, text, active, onRenameTask, onDeleteTaskClick, onFocusTaskClick }) => {
  if (active) {
    return (
      <div style={styles.activeRootStyle}>
        <textarea
          autoFocus
          ref={ ref => this.taskName = ref }
          style={styles.textInputStyle}
          defaultValue={text}
          onKeyPress={ evt => { 
            if(evt.key === 'Enter')
              this.taskName.blur()
          }}
          onBlur={ evt => onRenameTask(id, this.taskName.value) }
          onChange={ evt => this.taskName.value = evt.target.value }
        />  
      </div>
    )
  } 

  return  (
    <div style={styles.inactiveRootStyle} onClick={ evt => onFocusTaskClick(id)}>
      <div style={{ overflow: 'scroll' }}>
        <h2 style={styles.taskNameStyle}>{text}</h2>
      </div>
      <div style={styles.deleteBtnStyle}>
        <CustomButton onButtonClick={ evt => onDeleteTaskClick(id) }>
          <img
            src='./images/trash.svg'
            alt='delete task'
            width='16'
            style={{ cursor: 'pointer' }}
          />
        </CustomButton>
      </div>
    </div>
  )
}

markup.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onRenameTask: PropTypes.func.isRequired,
  onDeleteTaskClick: PropTypes.func.isRequired,
  onFocusTaskClick: PropTypes.func.isRequired
}

const Task = connect(
  mapStateToProps,
  mapDispatchToProps
)(markup)

export default Task
