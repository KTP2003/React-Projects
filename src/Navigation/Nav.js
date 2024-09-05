import {FiHeart} from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav=({handleInputChange,query})=>{
    return(
        <nav>
            <div className="nav-container" >
                <input
                className="search-input"
                type="text"
                onChange={handleInputChange}
                value={query}
                placeholder="Enter your search shoes"
                />
            </div>
            <div className="profile-container" >
                <a>
                    <FiHeart className="nav-icons" />
                </a>
                <a>
                    <AiOutlineShoppingCart className="nav-icons" />
                </a>
                <a>
                    <AiOutlineUserAdd className="nav-icons" />
                </a>
            </div>
        </nav>
    );
};

export default Nav;