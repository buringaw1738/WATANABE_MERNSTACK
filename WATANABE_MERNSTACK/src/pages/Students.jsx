import student from "../data/student.json";
import StudentCard from "../components/studentcard";

function Students() {

    return(
        <div className="container mx-auto">
            <h1 className="text-3x1 font-bold mb-4">Students</h1>
            <div className="grid grid-cpls-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {student.map((student) => (
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
        </div>
    );
}

export default Students;