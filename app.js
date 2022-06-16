const wrapper = document.getElementById("wrapper");

const students = [
  {
    name: "Martin",
    lastName: "Lant",
    marks: [9, 8, null, 7, 5],
  },

  {
    name: "Francesco",
    lastName: "Portus",
    marks: [5, 4, 2, 3, 2],
  },

  {
    name: "Bill",
    lastName: "Merdoc",
    marks: [10, null, null, null, 10],
  },

  {
    name: "John",
    lastName: "Entman",
    marks: [9, 8, 9, 7, 5],
  },
];

for (let student of students) {
  let average = 0;
  const filteredMarks = student.marks.filter(
    (mark) => typeof mark === "number"
  );
  for (let mark of filteredMarks) {
    average += mark;
  }
  average = average / filteredMarks.length;
}

const student = students
  .map((info) => {
    const { name, lastName, marks } = info;
    const filteredMarks = marks.filter((mark) => typeof mark === "number");
    const reducedMarks = filteredMarks.reduce(function (
      previousValue,
      currentValue
    ) {
      return previousValue + currentValue;
    });
    const averageMark = reducedMarks / marks.length;

    return `
  <div class="${averageMark > 5 ? "fiveAndOver" : "belowFive"}">
    <p>Name: ${name}</p>
    <p>Last Name: ${lastName}</p>
    <p>Attendance: ${filteredMarks.length} lectures</p>
    <p>Average mark: ${averageMark}
 </div>
`;
  })
  .join("");
wrapper.innerHTML = student;
