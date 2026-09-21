import { useParams, Link } from "react-router-dom";

export default function TeacherDetails({ teachers }) {
    const { id } = useParams();
    const teacher = teachers.find((t) => t.id === Number(id));

    if (!teacher) {
        return (
            <main className="page">
                <h1>Teacher Details</h1>
                <p>Teacher not found.</p>
                <Link to="/teachers">
                    Back to Teachers
                </Link>
            </main>
        );
    }

    return (
        <main className="page">
            <div className="details-card">
            <h1>Teacher Details</h1>
            <h2>Name: {teacher.name}</h2>
            <p>Employee Number: {teacher.employeeNumber}</p>
            <p>Department: {teacher.department}</p>
            <p>Specialization: {teacher.specialization}</p>
            <p>Sex: {teacher.sex}</p>

            <Link to="/teachers">
                Back
            </Link>
            </div>
        </main>
    );
}