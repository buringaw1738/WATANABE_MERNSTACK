import { useState } from "react";
import StudentCard from "../components/studentcard";

export default function AddStudent() {
    const [name, setName] = useState("")
    const [studentNumber, setStudentNumber] = useState("")
    const [course, setCourse] = useState("BSIT")
    const [yrLevel, setYrLevel] = useState("1st Year")
    const [sex, setSex] = useState("Male")
    const [addedStudent, setAddedStudent] = useState(null)

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleStudentNumberChange = (e) => {
        setStudentNumber(e.target.value)
    }

    const handleCourseChange = (e) => {
        setCourse(e.target.value)
    }

    const handleYrLevelChange = (e) => {
        setYrLevel(e.target.value)
    }

    const handleSexChange = (e) => {
        setSex(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newStudent = {
            id: Date.now(),
            name,
            studentNumber,
            course,
            yearLevel: yrLevel,
            sex
        }
        setAddedStudent(newStudent)
        setStudentNumber("")
        setName("")
        setCourse("BSIT")
        setYrLevel("1st Year")
        setSex("Male")
    }

    return (
        <main className="form-page">
            <section className="form-card">
                <div className="form-heading">
                    <p className="eyebrow">Student records</p>
                    <h1>Add Student</h1>
                </div>
                <form className="record-form" onSubmit={handleSubmit}>
                <label htmlFor="student-name">
                    Name:
                    <input id="student-name" type="text" value={name} onChange={handleNameChange} required />
                </label>
                <label htmlFor="student-number">
                    Student Number:
                    <input id="student-number" type="text" value={studentNumber} onChange={handleStudentNumberChange} required />
                </label>
                <label htmlFor="course">
                    Course:
                    <select id="course" value={course} onChange={handleCourseChange}>
                        <option value="BSIT">BSIT</option>
                        <option value="BSCS">BSCS</option>
                    </select>
                </label>
                <label htmlFor="year-level">
                    Year Level:
                    <select id="year-level" value={yrLevel} onChange={handleYrLevelChange}>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                    </select>
                </label>
                <label htmlFor="sex">
                    Sex:
                    <select id="sex" value={sex} onChange={handleSexChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </label>
                <div className="form-actions">
                    <button className="button" type="submit">Add Student</button>
                </div>
            </form>
                {addedStudent && (
                    <section className="recent-section">
                        <h2>Recently Added</h2>
                        <div className="new-students-list">
                            <StudentCard
                                id={addedStudent.id}
                                name={addedStudent.name}
                                studentNumber={addedStudent.studentNumber}
                                course={addedStudent.course}
                                yearLevel={addedStudent.yearLevel}
                                sex={addedStudent.sex}
                                showDetailsLink={false}
                            />
                        </div>
                    </section>
                )}
            </section>
        </main>
    )

}