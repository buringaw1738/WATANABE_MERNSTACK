import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
   
        <nav>
            <div className="container mx-auto">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:-text-blue-300">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/students" className="hover:-text-blue-300">
                        Students
                        </Link>
                    </li>
                    <li>
                        <Link to="/students/add" className="hover:-text-blue-300">
                        Add Student
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}