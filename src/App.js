import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react";
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [ tasks, setTasks ] = useState( [
    {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text:'Meeting school',
        day:'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    }
])

//Add task
const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
}

//Borrar task
const deleteTask = (id) => {
  console.log(id)
  setTasks(tasks.filter((task)=> task.id !== id))
}

//Togle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id === id ? { ...task, reminder : !task.reminder } : task
    )
  )
}

  return (
    <div className="App">
      <Header onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd = { showAddTask }/>
      { showAddTask && <AddTask onAdd = {addTask}/>}
      { tasks.length > 0 ? <Tasks tasks = {tasks}
      onDelete = {deleteTask }
      onToggle = { toggleReminder }/> : 'No hay tareas para mostrar' }
    </div>
  );
}

export default App;
