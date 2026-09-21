import { useState } from "react";
import TeacherCard from "../components/teachercard";

export default function AddTeacher({ onAddTeacher }) {
    const [name, setName] = useState("")
    const [employeeId, setEmployeeId] = useState("")
    const [department, setDepartment] = useState("DIET")
    const [specialization, setSpecialization] = useState("Software Engineering")
    const [sex, setSex] = useState("Male")
    const [addedTeacher, setAddedTeacher] = useState(null)

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmployeeIdChange = (e) => {
        setEmployeeId(e.target.value)
    }

    const handleDepartmentChange = (e) => {
        setDepartment(e.target.value)
    }

    const handleSpecializationChange = (e) => {
        setSpecialization(e.target.value)
    }

    const handleSexChange = (e) => {
        setSex(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTeacher = {
            id: Date.now(),
            name,
            employeeNumber: employeeId,
            department,
            specialization,
            sex
        }
        onAddTeacher(newTeacher)
        setAddedTeacher(newTeacher)
        setEmployeeId("")
        setName("")
        setDepartment("DIET")
        setSpecialization("Software Engineering")
        setSex("Male")
    }

    return (
        <main className="form-page">
            <section className="form-card">
                <div className="form-heading">
                    <p className="eyebrow">Teacher records</p>
                    <h1>Add Teacher</h1>
                </div>
                <form className="record-form" onSubmit={handleSubmit}>
                <label htmlFor="teacher-name">
                    Name:
                    <input id="teacher-name" type="text" value={name} onChange={handleNameChange} required />
                </label>
                <label htmlFor="employee-id">
                    Employee ID:
                    <input id="employee-id" type="text" value={employeeId} onChange={handleEmployeeIdChange} required />
                </label>
                <label htmlFor="department">
                    Department:
                    <select id="department" value={department} onChange={handleDepartmentChange}>
                        <option value="DIET">DIET</option>
                        <option value="DIT">DIT</option>
                    </select>
                </label>
                <label htmlFor="specialization">
                    Specialization:
                    <select id="specialization" value={specialization} onChange={handleSpecializationChange}>
                        <option value="Software Engineering">Software Engineering</option>
                        <option value="Information Technology">Information Technology</option>
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
                    <button className="button" type="submit">Add Teacher</button>
                </div>
            </form>
                {addedTeacher && (
                    <section className="recent-section">
                        <h2>Recently Added</h2>
                        <div className="new-teachers-list">
                            <TeacherCard
                                id={addedTeacher.id}
                                name={addedTeacher.name}
                                employeeNumber={addedTeacher.employeeNumber}
                                department={addedTeacher.department}
                                specialization={addedTeacher.specialization}
                                sex={addedTeacher.sex}
                                showDetailsLink={false}
                            />
                        </div>
                    </section>
                )}
            </section>
        </main>
    )

}