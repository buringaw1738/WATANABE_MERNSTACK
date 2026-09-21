import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
   
        <nav className="navbar">
            <ul>
                    <li>
                        <Link to="/">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/students">
                        Students
                        </Link>
                    </li>
                    <li>
                        <Link to="/students/add">
                        Add Student
                        </Link>
                    </li>
                    <li>
                        <Link to="/teachers">
                        Teachers
                        </Link>
                    </li>
                    <li>
                        <Link to="/teachers/add">
                        Add Teacher
                        </Link>
                    </li>
                </ul>
        </nav>

    );
}