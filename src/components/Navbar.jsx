import { Link } from 'react-router-dom';

const Navbar = ({token, setToken}) => {
  function logout() {
    setToken(null);
    localStorage.removeItem('token');
    }
    return (
      <header>
        <nav>
            <ul>
                <li><Link to="/">Post</Link></li>
                {!token && <li><Link to="/profile">Profile</Link></li> }
                {!token && <li><Link to="/login">Login</Link></li> }
                {!token && <li><Link to="/register">Register</Link></li> }
                {token && <li><button onClick={logout}>Logout</button></li> }
            </ul>
        </nav>
      </header>
    )
}

export default Navbar;