/* eslint-disable react/prop-types */
const StudentTable = ({ student }) => {
  console.log(student);
  const { id, studentclass, name, score, percentage } = student;
  return (
    <tr className="text-white">
      <th>{id}</th>
      <td>{studentclass}</td>
      <td>{name}</td>
      <td>{score}</td>
      <td>{percentage}</td>
    </tr>
  );
};

export default StudentTable;
