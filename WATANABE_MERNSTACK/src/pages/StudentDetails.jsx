import studentsData from "../data/student.json";
import { useParams, Link } from "react-router-dom";

export default function StudentDetails() {
    const { id } = useParams();
    const student = studentsData.find((s) => s.id === Number(id));

    if (!student) {
        return (
            <div className="p-4">
                <h1>Student Details</h1>
                <p>Student not found.</p>
                <Link to="/students" className="text-blue-600 hover:underline">
                    Back to Students
                </Link>
            </div>
        );
    }

    return (
        <div className="p-4">
            <h1>Student Details</h1>
            <h2 className="text-lg font-bold">Name: {student.name}</h2>
            <p className="text-lg">Age: {student.age}</p>
            <p className="text-lg">Birthday: {student.birthday}</p>
            <p className="text-lg">Student Number: {student.studentNumber}</p>
            <p className="text-lg">Course: {student.course}</p>

            <Link to="/students" className="text-blue-600 hover:underline">
                Back
            </Link>
        </div>
    );
}