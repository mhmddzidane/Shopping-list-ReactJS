import {useState} from 'react'
import classnames from 'classnames'
import './App.css'
import shoppingIcon from './assets/shopping-icon.svg'
import plusIcon from './assets/plus-icon.svg'
import minusIcon from './assets/minus-icon.svg'

function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([
    {title: 'Tepung Terigu' ,count: 1},
    {title: 'Minyak Goreng' ,count: 1},
    {title: 'Sabun Mandi' ,count: 1},
  ])

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!value){
      alert('Please fill the list!')
      return
    }

    const addedTodos = [...todos, {
      title: value,
      count: 1
    }]

    setTodos(addedTodos)
    setValue('')
  }

  const handleAdditionCount = (index) => {
    const newTodos = [...todos]

    newTodos[index].count = newTodos[index].count + 1

    setTodos(newTodos)
  }

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos]

    if(newTodos[index].count > 0){
    newTodos[index].count = newTodos[index].count - 1
    }else{
      newTodos.splice(index, 1)
    }

    setTodos(newTodos)
  }

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count
    },0)
    return totalCounts
  }

  return (
    <>
      <nav className="nav">
        <img className="nav-icon" src={shoppingIcon} alt="shopping icon"/>
        <h1 className="nav-title">Shopping List</h1>
      </nav>

      <section className="container">
        <form className="form" onSubmit={handleSubmit}>
          <input 
            className="input" 
            type="text" 
            placeholder="List" 
            onChange={(e) => {setValue(e.target.value)}} 
            value={value}>
          </input>
          <button className="add-button" type="submit">Add</button>
        </form>

        <div className="info">
          <div className="info-total">
            <p>{`Total List: ${todos.length}`}</p>
          </div>
          <div className="info-total">
            <p>{`Total Counts: ${getTotalCounts()}`}</p>
          </div>
          <button className="delete-all-button" onClick={() => setTodos([])}>
            Delete all
          </button>
        </div>

        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo, index, arr) => {
              return (
                <div key={index} className={`todo ${!(arr.length === index + 1) && 'todo-divider'}`}>

                  {todo.title}

                  <div className="todo-icon-wrapper">
                    <div className="todo-count">{todo.count}</div>

                    <button className="todo-action-button" onClick={() => handleSubstractionCount(index)}>
                      <img src={minusIcon} alt="minus icon"></img>
                    </button>

                    <button className="todo-action-button" onClick={() => handleAdditionCount(index)}>
                      <img src={plusIcon} alt="plus icon"></img>
                    </button>
                  </div>

                </div>
              )
            } )}
          </div>
         ) : (
          <div>Empty List</div>
         )}
      </section>
    </>
  );
}

export default App;
