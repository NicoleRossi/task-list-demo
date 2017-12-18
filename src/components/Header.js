import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CustomButton from './CustomButton'
import { addTask, saveFinished } from '../actions'
import { saveAllTasks } from '../api'
import { getTaskList, getTasksUpdated } from '../reducers'

const styles = {
  rootStyle: {
    display: 'flex',
    paddingTop: '32px',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  titleStyle: {
    margin: 0,
    fontSize: '1.6em',
    alighItems: 'baseline',
    color: '#34495e'
  },
  addTaskStyle: {
    backgroundColor: '#8e9fb1',
    color: '#fff',
    padding: '15px',
    borderRadius: '4px',
    fontSize: '17px',
    cursor: 'pointer'
  },
  saveStyle: {
    backgroundColor: '#5ac597',
    color: '#fff',
    padding: '15px',
    borderRadius: '4px',
    fontSize: '17px'
  }
}

const markup = ({ onAddTaskClick, saveFinished, tasksUpdated, tasks }) => (
  <header style={styles.rootStyle}>
    <h1 style={styles.titleStyle}>Tasks</h1>
    <div>
      <CustomButton onButtonClick={ evt => onAddTaskClick() }>
        <div style={styles.addTaskStyle}>Add Task</div>
      </CustomButton>
      <CustomButton onButtonClick={ (evt) => {
        if(tasksUpdated) saveAllTasks(tasks).then(saveFinished) 
      }}>
        <div style={{ ...styles.saveStyle, cursor: tasksUpdated ? 'pointer' : 'default' }}>Save</div>
      </CustomButton>
    </div>
  </header>
)

markup.propTypes = {
  onAddTaskClick: PropTypes.func.isRequired,
  saveFinished: PropTypes.func.isRequired,
  tasksUpdated: PropTypes.bool,
  tasks: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  tasks: getTaskList(state),
  tasksUpdated: getTasksUpdated(state)
})

const mapDispatchToProps = dispatch => ({
  onAddTaskClick() {
    dispatch(addTask())
  },
  saveFinished(response) {
    dispatch(saveFinished(response))
  }
})

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(markup)

export default Header
