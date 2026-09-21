import StudentDetails from './pages/StudentDetails';
import Students from './pages/Students';
import TeacherDetails from './pages/TeacherDetails';
import Teachers from './pages/Teachers';
import Home from './pages/Home';
import AddStudent from './pages/AddStudent';
import AddTeacher from './pages/AddTeacher';
import Navbar from './components/navbar';
import { Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import initialStudents from './data/student.json';
import initialTeachers from './data/teacher.json';

function App() {
  const students = initialStudents;
  const [teachers, setTeachers] = useState(() =>
    initialTeachers.map((teacher, index) => ({ ...teacher, id: index + 1 }))
  );

  const addTeacher = (teacher) => {
    setTeachers((currentTeachers) => [...currentTeachers, teacher]);
  };

  return(
    

    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/students" element={<Students students={students} />} />
    <Route path="/students/add" element={<AddStudent />} />
    <Route path="/students/:id" element={<StudentDetails students={students} />} />
    <Route path="/teachers" element={<Teachers teachers={teachers} />} />
    <Route path="/teachers/:id" element={<TeacherDetails teachers={teachers} />} />
    <Route path="/teachers/add" element={<AddTeacher onAddTeacher={addTeacher} />} />
    </Routes>
    </Router>
  );

}

export default App;