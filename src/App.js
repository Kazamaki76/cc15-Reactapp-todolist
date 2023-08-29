// import logo from "./Screenshot 2023-08-29 130939.png";
// import './App.scss';
// import {FaHome} from 'react-icons/fa'
// function App() {
//   return (
//     <div className="todo">
//       <div className="todo__header">Header</div>
//       <div className="todo__sidebar">SideBar</div>
//       <div className="todo__content">TodoContent</div>
//       <div className="todosidebar">SideBar</div>
//     <div className="todocontent">TodoContent</div>
//     </div>
    
    
//   );
// }

// export default App;
import Header from "./Header";


import "./App.scss";


function App() {
  return (
    <div className="todo">
      <div className="todo__header">
       <Header/>  
      </div>
      <div className="todo__sidebar">SideBar</div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;