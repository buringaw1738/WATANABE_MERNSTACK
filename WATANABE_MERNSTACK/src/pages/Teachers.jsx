import TeacherCard from "../components/teachercard";

function Teachers({ teachers }) {

    return(
        <main className="page">
            <h1>Teachers</h1>
            <div className="record-list">
                {teachers.map((teacher) => (
                    <TeacherCard
                        key={teacher.id}
                        id={teacher.id}
                        name={teacher.name}
                        employeeNumber={teacher.employeeNumber}
                        department={teacher.department}
                        specialization={teacher.specialization}
                        sex={teacher.sex}
                    />
                ))}
            </div>
        </main>
    );
}

export default Teachers;