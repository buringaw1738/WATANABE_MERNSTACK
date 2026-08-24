import StudentCard from "./components/studentcard.jsx";
import Subjects from "./components/subjects.jsx";

  function App() {
    return (
      <div>
        
        <h1>Student Information</h1>
        <StudentCard
          name="Rey Yuki"
          age={20}
          birthday="2005-12-06"
          studentNumber="202401081"
          course="Information Technology"
        />

                <h1>Subject Information</h1>
        <Subjects
          schedCode="IT101"
          subName="Introduction to Programming"
          classSched="Mon, Wed 10:00 AM - 12:00 PM"
        />

      </div>
    );
  }

  export default App;