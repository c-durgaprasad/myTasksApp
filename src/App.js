import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'
import Task from './components/Task'

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
  state = {
    userInput: '',
    tagOption: tagsList[0].optionId,
    taskList: [],
    activeTab: 'INITIAL',
  }

  getUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  selectOption = event => {
    this.setState({tagOption: event.target.value})
  }

  addTask = () => {
    const {userInput, tagOption} = this.state
    const taskDetails = {
      id: uuidv4(),
      userInput,
      category: tagOption,
    }
    this.setState(prev => ({
      taskList: [...prev.taskList, taskDetails],
    }))
    this.setState({userInput: '', tagOption: tagsList[0].optionId})
  }

  changeTab = event => {
    this.setState(prev => ({
      activeTab:
        prev.activeTab === event.target.value ? 'INITIAL' : event.target.value,
    }))
  }

  renderInputView = () => {
    const {userInput, tagOption} = this.state
    return (
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
            onChange={this.getUserInput}
            value={userInput}
          />
        </div>
        <div className="input-con">
          <label htmlFor="tag" className="label">
            Tags
          </label>
          <br />
          <select
            className="input"
            id="tag"
            onChange={this.selectOption}
            value={tagOption}
          >
            {tagsList.map(tag => (
              <option key={tag.optionId} value={tag.optionId}>
                {tag.displayText}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }

  render() {
    const {taskList, activeTab} = this.state
    const filterTaskList =
      activeTab === 'INITIAL'
        ? taskList
        : taskList.filter(task => task.category === activeTab)
    return (
      <div className="bg-container">
        <form className="task-container">
          <h1 className="task">Create a task!</h1>
          {this.renderInputView()}
          <button type="button" className="add-task-btn" onClick={this.addTask}>
            Add Task
          </button>
        </form>
        <div className="task-view-container">
          <h1 className="tag-heading">Tags</h1>
          <ul className="btn-ul">
            {tagsList.map(item => (
              <li key={item.optionId}>
                <button
                  type="button"
                  className="button"
                  onClick={this.changeTab}
                  value={item.optionId}
                >
                  {item.displayText}
                </button>
              </li>
            ))}
          </ul>
          <h1 className="task-heading">Tasks</h1>
          {filterTaskList.length === 0 ? (
            <div className="no-tasks-container">
              <p className="no-tasks">No Tasks Added Yet</p>
            </div>
          ) : (
            <ul className="ul">
              {filterTaskList.map(task => (
                <Task task={task} key={task.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default App
