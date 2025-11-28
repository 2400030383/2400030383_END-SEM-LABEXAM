function StudentCard() {
  const student = {
    name: "John Doe",
    age: 20,
    course: "Computer Science",
    image: "student.jpg"   // Keep student.jpg in the same folder
  };

  return (
    <div className="card">
      <img src={student.image} className="image" />
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<StudentCard />);
