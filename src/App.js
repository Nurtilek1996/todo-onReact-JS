import './App.css';
import Header from './components/header/Header';
import TodoElements from './components/todoElement/TodoElements';
import CreateTodo from './CreateTodo/CreateTodo';
import {useState} from 'react';

function App() {
const [arr,setArr] = useState ([
  {id:1,
    text: 'Meet with Nur',
 status: true},
  {id:2,
    text: 'Rent a Car',
status:false},
  {id:3,
    text: 'Create Web site',
status: true},
  {id:4,
    text:'Go to Gym',
status: false},
 {id:5,
  text: 'Walk in JBR',
 status: true},
 {id:6,
  text: 'Eat Dinner',
 status: false}
])

const result = arr.reduce((acc,currentItem) => {
return acc + currentItem.status
},0)


 
const addTask = (newText) => {
  setArr([...arr,{text:newText, status:false, id:Date.now}])
}

const deleteTask = (id) => {
  const task = arr.filter((item) => {
return item.id !== id
  });
  setArr(task);
}

const newArr = arr.map((item) => {
  return <TodoElements deleteTask={deleteTask} id={item.id} text = {item.text} status={item.status}/>
  
})
  return (
    <div className="App">
      <Header arrLength = {arr.length} arrResult ={result}/>
      <div className='main-content'>
        <CreateTodo addTask={addTask}/>
        <div className='todo-elements'>
{/* <TodoElements text='Meet with Nur' status={false}/>
<TodoElements text='Rent a Car' status={true}/>
<TodoElements text='Create Web Site' status={false}/>
<TodoElements text='Go to Gym' status={true}/>
<TodoElements text='Walk in JBR' status={false}/>
<TodoElements text='Eat Dinner' status={true}/> */}
{newArr}
        </div>
      </div>
    </div>
  );
}

export default App
