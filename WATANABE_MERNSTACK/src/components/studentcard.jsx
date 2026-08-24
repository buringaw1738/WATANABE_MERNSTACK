function StudentCard({ name, age, birthday, studentNumber, course }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const studentInfo = [
    { label: "Name", value: name },
    { label: "Age", value: age },
    { label: "Birthday", value: birthday },
    { label: "Student Number", value: studentNumber },
    { label: "Course", value: course },
  ];

  return (
    <div className="student-card">
      <div className="student-avatar">{initials}</div>

      <div className="student-details">
        {studentInfo.map((item) => (
          <div key={item.label} className="info-row">
            <span className="info-label">{item.label}:</span>
            <span className="info-value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentCard;