import "./navbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

// import axios from "axios";



const Navbar = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

    const handleSearch = () => {
      navigate("/login");
  };

  // const {loading, error, dispatch } = useContext(AuthContext);

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   dispatch({ type: "LOGOUT_START" });
  //   try {
  //     //const res = await axios.post("/auth/login", credentials);
  //     dispatch({ type: "LOGOUT_SUCCESS", payload: res.data.details});
  //    // navigate("/")
  //   } catch (err) {
  //     dispatch({ type: "LOGOUT_FAILURE", payload: err.response.data });
  //   }
  // };



  return (
    <div className="navbar">
      <div></div>
      <div className="navContainer">

        <div><Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className="logo">ebooking</span>
        </Link>
        </div>
        {user ?  user.username : (<div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton" onClick={handleSearch}>Login</button>
        </div>
        )}
       {/* {user && <button className="loButton">Logout</button>} */}
      </div>
    </div>
  )
}

export default Navbar