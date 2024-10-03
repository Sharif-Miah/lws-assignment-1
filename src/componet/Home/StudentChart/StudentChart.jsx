import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import StudentTable from "./StudentTable";
// import StudentData from "../../../../public/student.json";

const StudentChart = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Simulate fetching data (replace with actual fetch logic)
    const fetchData = async () => {
      const data = await fetch("/student.json"); // Replace with your API
      const result = await data.json();
      console.log(result);
      setStudents(result); // Populate the students array
    };

    fetchData().catch((error) => {
      console.error("Error fetching student data:", error);
    });
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
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-white">
                <th>ID</th>
                <th>Name</th>
                <th>class</th>
                <th>Scores</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody className="">
              {students.length > 0 ? (
                students.map((student) => (
                  <StudentTable key={student.id} student={student} />
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-3 px-4">
                    No students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default StudentChart;
