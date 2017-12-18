# task-list-demo
A simple task list application with Redux under the hood

How to Install:
1. In the root directory, run `npm install`
2. Type `npm start`; the web app will open in your default browser, running on localhost:3000 in development mode
3. To make a production build, type `npm run build`; the build folder is ready for hosting on a server of your choice

How to Use:
* Click "Add Task" to make a new task box appear at the top of the list
* Click "Save" to save your list of tasks.  It will only be active if you've added a task, renamed a task, or deleted a task; it saves the entire list at once (to account for deleted tasks)
* Click the white task box to edit/rename a task; you can finish editing the task by pressing the "enter" key or by clicking anywhere else to remove the focus from the white task box
* Click the trash icon to remove a specifc task from the list

More Functionality:
* When the page loads, it attempts to retrieve a list of existing tasks from the server; if the server throw an error, the error is displayed in an overlay in the lower right corner in red
* When you click save, the result of the save is displayed in an overlay in the lower right corner (green for success, red for failure).
* If the save fails, click "Save" again to retry
* Click the circled X in the overlay to dismiss it; I made this decision so error messages can be selected with the mouse for pasting in bug reports.

I tried to use only react and redux, but each task needed a unique ID so I used node-uuid due to time constraints.

Things I wanted to do (but couldn’t due to time constraints):
* Use react-storybook to test/document behavior of visual components in various scenarios (e.g. super long, multi-line text)
* Use test driven development (but then I would have had to learn a testing framework, in addition to redux!)
* Make a more general error object and subsequent reducer (and error handling system?) for it

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
