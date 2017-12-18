import { combineReducers } from 'redux'

const taskList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        {
          id: action.id,
          active: true,
          text: 'Task'
        },
        ...state
      ]
    case 'FOCUS_TASK':
      return state.map((item) => {
        const clonedItem = { ...item }
        if(clonedItem.id === action.id) {
          clonedItem.active = true
        } else {
          clonedItem.active = false
        }
        return clonedItem
      })
    case 'RENAME_TASK':
      return state.map((item) => {
        const clonedItem = { ...item }
        if(clonedItem.id === action.id) {
          clonedItem.text = action.text
          clonedItem.active = false
        }
        return clonedItem
      })
    case 'DELETE_TASK':
      return state.filter(item => item.id !== action.id)
    case 'RECEIVE_TASKS':
      return action.response.tasks || []
    default:
      return state
  }
}

const tasksUpdated = (state = false , action) => {
  switch (action.type) {
    case 'TASKS_UPDATED':
      return true
    case 'RESET_TASKS_UPDATED':
      return false
    case 'SAVE_FINISHED':
      return action.response.error ? true : false
    default:
      return state
  }
}

const fetchError = (state = '', action) => {
  switch (action.type) {
    case 'RECEIVE_TASKS':
      return action.response.error || ''
    case 'CLEAR_ERROR':
      return ''
    default:
      return state
  }
}

const saveError = (state = '', action) => {
  switch (action.type) {
    case 'SAVE_FINISHED':
      return action.response.error || ''
    case 'CLEAR_ERROR':
      return ''
    default:
      return state
  }
}

const infoMessage = (state = '', action) => {
  switch (action.type) {
    case 'SAVE_FINISHED':
      return action.response.error ? '' : 'Tasks saved successfully.'
    case 'BROADCAST_INFO':
      return action.info || ''
    case 'CLEAR_INFO':
      return ''
    default:
      return state
  }
}

const tasksApp = combineReducers({
  taskList,
  tasksUpdated,
  fetchError,
  saveError,
  infoMessage
})

export default tasksApp

export const getTaskList = state => { return state.taskList }
export const getTasksUpdated = state => { return state.tasksUpdated }
export const getFetchError = state => { return state.fetchError }
export const getSaveError = state => { return state.saveError }
export const getInfoMessage = state => { return state.infoMessage }
