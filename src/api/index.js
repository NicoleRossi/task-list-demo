export const fetchAllTasks = () => {
  return fetch('http://cfassignment.herokuapp.com/nicolerossi/tasks')
    .then(response => response.json())
}

export const saveAllTasks = (tasks) => {
  const idAndTextOnly = tasks.map((task) => {
    return {
      id: task.id,
      text: task.text
    }
  })
  return fetch('http://cfassignment.herokuapp.com/nicolerossi/tasks', {
    method: 'post',
    body: JSON.stringify({ tasks: idAndTextOnly })
  }).then(response => response.json())
}