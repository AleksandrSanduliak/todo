import {useState} from 'react';
import './Assets/global.css'
import Logo from './Components/UI/Logo/Logo';
import Form from './Components/Form/Form';
import Counter from './Components/Counter/Counter';
import { tasksType } from './Types/types';
import EmptyList from './Components/UI/EmptyList/EmptyList';
import ItemLi from './Components/UI/ItemLi/ItemLi';

function App() {
  const [task, setTask] = useState<tasksType[]>([
    // {id:2,taskValue:'Сдать экзамен'},
    // {id:3,taskValue:'Приготовить еду'},
    // {id:4,taskValue:'Вычесать кота'},
  ])
  const [input, setInput] = useState<string>('')
  const [completed, setCompleted] = useState(0)

  const addCompleted = () => setCompleted(n => n+1)
  const remCompleted = () => setCompleted(n => n-1)
  const createTask = (newTask:tasksType) => {
    setTask([...task, newTask, ])
  }
  const deleteTask = (id:number|string) => {
    setTask(task.filter(item => item.id !== id ))
    console.log(task.filter(item => console.log(item.id,id)))
  }
  return (
    <div className="App">
      <div className="black">1</div>
      <div className="Container">
        <Logo/>
        <Form create={createTask} task={task} input={input} setTask={setTask} setInput={setInput} />
        <div className="counters">
        <Counter text='Created tasks' color={'#4EA8DE'} task={task}/>
        <Counter text='Completed' color={'#8284FA'} task={task} ofs={'out of'} completed={completed}/>
        </div>
        
        {task.length? task.map((el, indx) => {
          return(
            <ItemLi deleting={deleteTask} key={indx} indx={el.id} task={el.taskValue} add={addCompleted} del={remCompleted}/>
          )
        }) : <EmptyList/>}
      </div>
    </div>
  );
}

export default App;
