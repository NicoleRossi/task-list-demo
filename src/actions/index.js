import { v4 } from 'node-uuid'

const tasksUpdated = () => ({
  type: 'TASKS_UPDATED'
})

const resetTasksUpdated = () => ({
  type: 'RESET_TASKS_UPDATED'
})

export const addTask = text => dispatch => {
  dispatch(tasksUpdated())
  
  dispatch({
    type: 'ADD_TASK',
    id: v4()
  })
}

export const renameTask = (id, text) => dispatch => {
  dispatch(tasksUpdated())

  dispatch({
    type: 'RENAME_TASK',
    id,
    text
  })
}

export const focusTask = id => dispatch => {
  dispatch(tasksUpdated())

  dispatch({
    type: 'FOCUS_TASK',
    id
  })
}

export const deleteTask = id => dispatch => {
  dispatch(tasksUpdated())

  dispatch({
    type: 'DELETE_TASK',
    id
  })
}

export const saveAllTasks = tasks => ({
  type: 'SAVE_ALL_TASKS',
  tasks
})

export const receiveTasks = (response) => ({
  type: 'RECEIVE_TASKS',
  response
})

export const saveFinished = (response) => ({
  type: 'SAVE_FINISHED',
  response
})

export const clearError = () => ({
  type: 'CLEAR_ERROR'
})

export const broadcastInfo = (info) => ({
  type: 'BROADCAST_INFO',
  info
})

export const clearInfo = () => ({
  type: 'CLEAR_INFO'
})
