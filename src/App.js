import {useState} from 'react'

import Navbar from './components/navbar/index'
import Container from './components/container'
import SearchInput from './components/searchInput'
import Info from './components/info'
import Todos from './components/todos'
import Empty from './components/empty'

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
     <Navbar></Navbar>

      <Container>

        <SearchInput 
          onSubmit={handleSubmit} 
          onChange={(e) => setValue(e.target.value)} 
          value={value}>
        </SearchInput>

        <Info
          todosLength={todos.length}
          totalCounts={getTotalCounts()}
          onDelete={() => setTodos([])}
          >
        </Info>

        {todos.length > 0 ? (
          <Todos
            todos={todos}
            onSubstraction={(index) => handleSubstractionCount(index)}
            onAddition={(index) => handleAdditionCount(index)}
          ></Todos>
         ) : (
          <Empty></Empty>
         )}
      </Container>
    </>
  );
}

export default App;
