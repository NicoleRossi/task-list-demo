import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Task from './Task'
import { receiveTasks } from '../actions'
import { fetchAllTasks } from '../api'
import { getTaskList } from '../reducers'

const styles = {
  rootStyle: {
    listStyle: 'none',
    paddingLeft: 0
  }
}

const markup = class extends Component {
  componentDidMount() {
    const { onReceiveTasks } = this.props
    fetchAllTasks().then(onReceiveTasks)
  }

  render() {
    const { tasks } = this.props
    return (
      <ul style={styles.rootStyle}>
        {tasks.map(task => (
          <li key={task.id}>
            <Task {...task} />
          </li>
        ))}
      </ul>
    )
  }
}

markup.propTypes = {
  tasks: PropTypes.array.isRequired,
  onReceiveTasks: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  tasks: getTaskList(state)
})

const mapDispatchToProps = dispatch => ({
  onReceiveTasks(tasks) {
    dispatch(receiveTasks(tasks))
  }
})

const TaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(markup)

export default TaskList
