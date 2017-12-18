import React from 'react'
import { connect } from 'react-redux'
import ErrorDialog from './components/ErrorDialog'
import InfoDialog from './components/InfoDialog'
import Header from './components/Header'
import TaskList from './components/TaskList'
import { clearError, clearInfo } from './actions'
import { 
  getFetchError,
  getSaveError,
  getTaskList,
  getTasksUpdated,
  getInfoMessage } from './reducers'

const styles = {
  rootStyle : {
    backgroundColor:'#f5f7f9',
    height: '100%',
    width: '100%',
    overflow: 'scroll'
  },
  topBarStyle: {
    width: '100%',
    height: '60px',
    backgroundColor: '#2c3e50',
    zIndex: 10
  },
  contentStyle: {
    display: 'flex',
    width: '72.8333333333333%',
    margin: '0 auto',
    flexDirection: 'column',
    top: '60px'
  }
}

const markup = ({ 
  fetchError,
  saveError,
  userMessage, 
  totalTasks,
  onClearError,
  onClearInfo
}) => {
  let overlay = null

  if(totalTasks === 0 && fetchError) {
    overlay = (
      <ErrorDialog onCloseClick={onClearError}>
        {fetchError}
      </ErrorDialog>
    )
  } else if(saveError) {
    overlay = (
      <ErrorDialog onCloseClick={onClearError}>
        {saveError}
      </ErrorDialog>
    )
  } else if(userMessage) {
    overlay = (
      <InfoDialog onCloseClick={onClearInfo}>
        {userMessage}
      </InfoDialog>
    )
  }

  return (
    <div style={styles.rootStyle}>
      <div style={{ ...styles.topBarStyle, position: 'fixed' }}/>
      <div style={styles.contentStyle}>
        <div style={styles.topBarStyle}/>
        <Header />
        <TaskList />
      </div>
      {overlay}
    </div>
  )
}

const mapStateToProps = state => ({
  totalTasks: getTaskList(state).length,
  fetchError: getFetchError(state),
  saveError: getSaveError(state),
  tasksUpdated: getTasksUpdated(state),
  userMessage: getInfoMessage(state)
})

const mapDispatchToProps = dispatch => ({
  onClearError() {
    dispatch(clearError())
  },
  onClearInfo() {
    dispatch(clearInfo())
  }
})

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(markup)

export default App
