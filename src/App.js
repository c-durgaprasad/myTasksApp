import {Component} from 'react'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  render() {
    return (
      <div className="task-container">
        <h1 className="task-heading">Create a task!</h1>
        <div>
          <div className="input-con">
            <label htmlFor="task" className="label">
              Task
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter the task here"
              id="task"
              className="input"
            />
          </div>
          <div className="input-con">
            <label htmlFor="tag" className="label">
              Tags
            </label>
            <br />
            <select className="input" id="tag">
              {tagsList.map(tag => (
                <option key={tag.optionId}>{tag.displayText}</option>
              ))}
            </select>
          </div>
        </div>

        <button type="button" className="add-task-btn">
          Add Task
        </button>
      </div>
    )
  }
}
export default App
