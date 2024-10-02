import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
// import StudentData from "../../../../public/student.json";

const StudentChart = () => {
  const [students, setStudents] = useState();

  useEffect(() => {
    fetch("/public/student.json") // Assuming your JSON file is in the public folder
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <section className="bg-[#172227] py-16">
      <div className="max-w-7xl mx-auto">
        <div>
          <h1 className="text-white text-5xl font-bold text-center mb-9">
            <span className="text-[#00cc8c]"> Students </span> of the year
          </h1>
          <div className="flex justify-center mt-6">
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Search by students"
                className="py-3 w-[450px] px-10 rounded-full  font-semibold"
              />
              <IoIosSearch className="text-black text-2xl mt-2 -ml-10" />
            </div>
          </div>
        </div>
        <div>
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Grade</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default StudentChart;
