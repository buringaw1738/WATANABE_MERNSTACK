import { Link } from 'react-router-dom';

function TeacherCard({id, name, employeeNumber, department, specialization, sex, showDetailsLink = true}) {
    return(
        <div className="record-card">
            <p>Name: {name}</p>
            <p>Employee Number: {employeeNumber}</p>
            <p>Department: {department}</p>
            <p>Specialization: {specialization}</p>
            {sex && <p>Sex: {sex}</p>}
  

        {showDetailsLink && (
            <Link to={`/teachers/${id}`}>
            View Teacher Details
            </Link>
        )}
        </div>
    );
}

export default TeacherCard;