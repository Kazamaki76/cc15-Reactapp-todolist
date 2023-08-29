import { FaHome, FaSearch } from "react-icons/fa";
import "./Header.scss";
import Search from "./Seacrh"; 



function Header() {
    return ( 
      
          <header className="header">
            <div className='header__logo'> <FaHome/> </div>
            
            <div className='header__text'>todolist</div>
            <div className='header__search'>
              {/* search component */}
              <Search/>
               </div>
            
          </header>
       
    );
}

export default Header;