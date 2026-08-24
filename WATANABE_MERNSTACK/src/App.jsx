import StudentCard from "./components/studentcard.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <div className="page-card">
        <div className="header-block">
          <p className="eyebrow">Student Profile</p>
          <h1>Student Information</h1>
        </div>

        <StudentCard
          name="Rey Yuki"
          age={20}
          birthday="2005-12-06"
          studentNumber="202401081"
          course="Information Technology"
        />
      </div>
    </div>
  );
}

export default App;