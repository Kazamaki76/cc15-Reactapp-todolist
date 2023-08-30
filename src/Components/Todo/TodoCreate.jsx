import style from "../Todo/TodoCreate.module.scss" ;

function TodoCreate() {
    return (
    <div className={style.todo__create}> 
        <span className={style.todo__create__button}> + </span>
        <h3 className={style.todo__create__}> Add Task </h3>
          </div>
          )
}



export default TodoCreate;
