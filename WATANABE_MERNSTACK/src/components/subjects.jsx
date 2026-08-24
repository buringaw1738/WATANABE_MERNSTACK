function Subjects({ schedCode, subName, classSched}) {
  return(
    <div>
        <p>Schedule Code: {schedCode}</p>
        <p>Name of Subject: {subName}</p>
        <p>Class Schedule: {classSched}</p>
    </div>
  )
}

export default Subjects;