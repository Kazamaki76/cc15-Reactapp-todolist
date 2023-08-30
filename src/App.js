// Dependencies
import "./App.scss";
import {
  FaHome,
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import Header from "./Components/Header";
import ListItem from "./Components/ListItem";
import Lists from "./Components/Lists";
import TodoHeader from './Components/Todo/TodoHeader';
import TodoCreate from "./Components/Todo/TodoCreate";
import TodoList from "./Components/Todo/TodoList";



function App() {
  const generalLists = [
    { id: 1, text: "Inbox", icon: <FaInbox />, active: true },
    { id: 2, text: "Today", icon: <FaCalendar />, active: false },
    { id: 3, text: "Next 7 Days", icon: <FaCalendarAlt />, active: false },
  ];

  const projectLists = [
    { id: 4, text: "Project-A", icon: <FaInbox />, active: true },
    { id: 5, text: "Project-B", icon: <FaInbox />, active: false },
  ];

  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category">
            <Lists data={generalLists} />
          </section>
          <section className="sidebar__category">
            <div className="accordion">
              {/* Toggle */}
              <div className="accordion__toggle">
                <li className="accordion__item">
                  <FaChevronDown className="accordion__item__icon accordion__item__active" />
                  <p className="accordion__item__text">Projects</p>
                </li>
              </div>
              <div className="todocontent">
                <div className="header">
                  <h1 className="headertext">Inbox</h1>
                </div>
              </div>
              {/* Lists */}
              <Lists data={projectLists} />
            </div>
          </section>
        </aside>
      </div>
      <div className="todo__content">8sd
      
     <TodoHeader/>
     <TodoCreate/>
     <TodoList/>
      
      
      
      
      
      </div>
    </div>
  );
}

export default App;

/* 
 <ul className='list'>
  // #1
                 {projectLists.map((obj) => (
                  <ListItem key={obj.id} text={obj.text} icon={obj.icon} active={obj.active} />
                ))} 

                // #2
                {projectLists.map((obj) => {
                  obj.key = obj.id;
                  delete obj.id;
                  return <ListItem {...obj} />;
                })}
</ul>
*/
