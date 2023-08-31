import styles from './TodoCreate.module.scss';
import TodoForm from "./TodoForm" ;
import { FaPlus } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import { useState } from 'react';


/*


CC1 Condition rendering 
-default : show button & Text
-active : show TodoForm 

_Concept : true ? <AddTask> : <AddForm>
*/

/*
CC2 Event Handling
-เอา Fn ไปผูกกับ UI เพื่อให้ user เรียกใช้ FN เอง 
-onClick : ต้องคลิ๊กก่อน, FN ทำงาน 
  -User คลิ๊ก
  -Browser จะเป็นคนเรียกใช้งาน FN โดยส่ง parameter มา 1 ตัว
  Browser : handleClick(eventObject)
*/

/*
CC3- JS value ไม่สามารถทำให้  React rerender ได้ 
ต้องใช้ state
โดยการ import useState จาก react libary
*/





/*
CC4 Array Destuctureing 
function myUseState(){
  return[5,9]
}
*/

/*
CC5 React state  ( 1 ใน fn ของกลุ่ม React Hook)
const [state, setState ] = useState(initialState:any)
//elemtn 1 : current state 
//element 2 :  FN สำหรับsetState
// เมื่ิอ state เปลี่ยน function component จะ rerender 
*/

// 1 FN component  ทำหน้าที่ render ในreact
function TodoCreate() {   
  // hook FN
  const [isOpenForm,setIsOpenForm] = useState(false);
  console.log(isOpenForm);

  let active = true;

  // 2 JS FN (Logic)
  const handleClick = function (event) { 
    console.log(event) ;
    setIsOpenForm(!isOpenForm)
  };
  return (
    <>
      {isOpenForm ? (
        <TodoForm 
        textSubmit="Add Task"
        setIsOpenForm={setIsOpenForm}
        />
      ) : (
        <div className={styles.todo__create} onClick={handleClick}>
          <div className={styles.todo__create__button}>
            <HiPlus />
          </div>
          <h3 className={styles.todo__create__text}>Add Task</h3>
        </div>
      )}
    </>
  );
}



export default TodoCreate;
