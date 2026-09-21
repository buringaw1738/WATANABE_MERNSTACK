import StudentCard from "../components/studentcard";

function Students({ students }) {

    return(
        <main className="page">
            <h1>Students</h1>
            <div className="record-list">
                {students.map((student) => (
                    <StudentCard
                        key={student.id}
                        id={student.id}
                        name={student.name}
                        age={student.age}
                        birthday={student.birthday}
                        studentNumber={student.studentNumber}
                        course={student.course}
                        section={student.section}
                        />
                ))}
            </div>
        </main>
    );
}

export default Students;