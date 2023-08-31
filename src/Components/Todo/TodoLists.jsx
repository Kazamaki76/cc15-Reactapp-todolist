import { useState } from 'react';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { HiOutlineCheck } from 'react-icons/hi';


import TodoItem from "./TodoItem"
import TodoForm from './TodoForm';
import styles from './TodoLists.module.scss';


/*

schema

todoObject : {id:number, task: string, status:boolean, due_data:string}
data = Array<{id:number, task:string, status: boolean , due_date:string }>

dataRender = Array[]<TOdoItem task=... done=... />
*/


const data =[ 
  { "id": 1, "task": "Suspendisse potenti.", "status": false, "due_date": "2023-04-26" },
  {
      "id": 2,
      "task": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "status": false,
      "due_date": "2023-05-08"
  },
  {
      "id": 3,
      "task": "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
      "status": false,
      "due_date": "2023-04-30"
  },
]


function TodoLists() {
  const dataRender = data.map((todoObj)=><TodoItem task={todoObj.task} done={todoObj.status} date={todoObj.due_date}/>);
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleClick = function () {
  };

  return ( 
    <ul className={styles.todo__lists}>
     {dataRender}
    </ul>
  ) 
}

export default TodoLists;