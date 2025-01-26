import './index.css'

const Task = props => {
  const {task} = props
  const {userInput, category} = task
  return (
    <li className="task-con">
      <p className="task-name">{userInput}</p>
      <p className="task-cat">{category}</p>
    </li>
  )
}

export default Task
