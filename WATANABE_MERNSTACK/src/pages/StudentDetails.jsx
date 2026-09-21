import { useParams, Link } from "react-router-dom";

export default function StudentDetails({ students }) {
    const { id } = useParams();
    const student = students.find((s) => s.id === Number(id));

    if (!student) {
        return (
            <main className="page">
                <h1>Student Details</h1>
                <p>Student not found.</p>
                <Link to="/students">
                    Back to Students
                </Link>
            </main>
        );
    }

    return (
        <main className="page">
            <div className="details-card">
            <h1>Student Details</h1>
            <h2>Name: {student.name}</h2>
            <p>Age: {student.age}</p>
            <p>Birthday: {student.birthday}</p>
            <p>Student Number: {student.studentNumber}</p>
            <p>Course: {student.course}</p>

            <Link to="/students">
                Back
            </Link>
            </div>
        </main>
    );
}