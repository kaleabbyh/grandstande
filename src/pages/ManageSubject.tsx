import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { IoMdAddCircle } from "react-icons/io";
import SubHeader from "../components/SubHeader";

function ManageSubject() {
  const tableData = [
    { id: 1, subjectName: "Math", grade: "10", dateCreated: "2021-09-01" },
    { id: 2, subjectName: "Science", grade: "5", dateCreated: "2021-09-05" },
    { id: 3, subjectName: "English", grade: "10", dateCreated: "2021-09-10" },
    { id: 4, subjectName: "Math", grade: "10", dateCreated: "2021-09-01" },
    { id: 5, subjectName: "Science", grade: "5", dateCreated: "2021-09-05" },
    { id: 6, subjectName: "English", grade: "10", dateCreated: "2021-09-10" },
    { id: 7, subjectName: "Math", grade: "10", dateCreated: "2021-09-01" },
    { id: 8, subjectName: "Science", grade: "5", dateCreated: "2021-09-05" },
    { id: 9, subjectName: "English", grade: "10", dateCreated: "2021-09-10" },
  ];
  const [hoveredRow, setHoveredRow] = useState<number>(-1);
  const handleRowHover = (index: number) => {
    setHoveredRow(index);
  };

  return (
    <div className="flex ">
      <Sidebar />
      <div className="container flex-1 mx-auto  ">
        <Header />
        <SubHeader />

        <button className="flex  items-center flex-wrap mt-4 mb-2 mx-2 rounded-lg px-3 py-2 text-white text-sm bg-indigo-500 transform transition-transform hover:scale-105">
          <IoMdAddCircle size={20} />
          <span className="px-1">Add Subject</span>
        </button>
        <table className="min-w-full text-sm bg-white border rounded-md border-gray-100">
          <thead>
            <tr style={{ height: "50px" }}>
              <th className="text-left py-2 px-4 border-b font-semibold ">
                No.
              </th>
              <th className="text-left py-2 px-4 border-b font-semibold">
                Subject Name
              </th>
              <th className="text-left py-2 px-4 border-b font-semibold">
                Grade
              </th>
              <th className="text-left py-2 px-4 border-b font-semibold">
                Date Created
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={row.id}
                className={`min-h-24 ${
                  index % 2 === 0
                    ? "bg-gray-100"
                    : "bg-white hover:bg-indigo-100"
                }  transition-colors duration-500
                
                `}
                style={{ height: "70px" }}
                onMouseEnter={() => handleRowHover(index)}
                onMouseLeave={() => handleRowHover(-1)}
              >
                <td className="py-2 px-4 border-b">{row.id}</td>
                <td className="py-2 px-4 border-b">
                  {row.subjectName}
                  {hoveredRow === index && (
                    <div className="flex pt-1">
                      <button className=" hover:border border-indigo-400 px-1 text-indigo-600 text-sm pr-2  rounded">
                        edit
                      </button>
                      <button className=" hover:border border-red-400 px-1 text-red-600 text-sm   rounded">
                        delete
                      </button>
                    </div>
                  )}
                </td>
                <td className="py-2 px-4 border-b">{row.grade}</td>
                <td className="py-2 px-4 border-b">{row.dateCreated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageSubject;
