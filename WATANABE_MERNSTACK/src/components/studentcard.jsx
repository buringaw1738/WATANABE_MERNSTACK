import { Link } from 'react-router-dom';

function StudentCard({id, name, age, birthday, studentNumber, course, yearLevel, sex, showDetailsLink = true}) {
    return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Birthday: {birthday}</p>
            <p>Student Number: {studentNumber}</p>
            <p>Course: {course}</p>
            {yearLevel && <p>Year Level: {yearLevel}</p>}
            {sex && <p>Sex: {sex}</p>}
  

        {showDetailsLink && (
            <Link to={`/students/${id}`} className="text-blue-600 hover:underline">
            View Student Details
            </Link>
        )}
        </div>
    );
}

export default StudentCard;