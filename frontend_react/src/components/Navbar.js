import React from 'react';
import '../styles/nav.css'
import { Link} from 'react-router-dom';

class Navbar extends React.Component{

    render()
    {
        return (
            <nav className="navContainer">
                <div>
                    <h1>STACK</h1>
                </div>
                <div className="navItems">
                    <Link className="aNav" style={aBackground.bg} to="/signup">Sign Up</Link>
                    <Link className="aNav aHover"  to="/login">Log In</Link>
                </div>
            </nav>
        );
    }
}

const aBackground = {
   bg: { backgroundColor: '#000020',
    borderRadius: 4,
    color: '#ffff'},
};
export default Navbar;