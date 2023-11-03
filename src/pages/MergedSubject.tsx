import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { IoMdAddCircle } from "react-icons/io";
import SubHeader from "../components/SubHeader";

function MergedSubject() {
  const tableData = [
    { id: 1, subjectName: "Math", grade: "10", dateCreated: "2021-09-01" },
    { id: 2, subjectName: "Science", grade: "5", dateCreated: "2021-09-05" },
    { id: 3, subjectName: "English", grade: "10", dateCreated: "2021-09-10" },
    { id: 4, subjectName: "Math", grade: "10", dateCreated: "2021-09-01" },
    { id: 5, subjectName: "Science", grade: "5", dateCreated: "2021-09-05" },
    { id: 6, subjectName: "English", grade: "10", dateCreated: "2021-09-10" },
  ];

  return (
    <div className="flex ">
      <Sidebar />
      <div className="container flex-1 mx-auto ">
        <Header />

        <SubHeader />
        <button className="flex  items-center flex-wrap mt-4 mb-2 mx-2 rounded-lg px-3 py-2 text-white text-sm bg-indigo-500 transform transition-transform hover:scale-105">
          <IoMdAddCircle size={20} />
          <span className="px-1">Add Merged Subject</span>
        </button>
        <table className="min-w-full text-sm bg-white border rounded-md border-gray-100">
          <thead>
            <tr>
              <th className="text-left py-2 px-2 border font-semibold">
                Merge Name
              </th>
              <th className="text-left py-2 px-4 border font-semibold">
                Grade
              </th>
              <th className="text-left py-2 px-4 border font-semibold">
                Merged Subject List
              </th>
              <th className="text-left py-2 px-4 border font-semibold">
                Percentage
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={row.id}
                className={`min-h-24 bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
                style={{ height: "70px" }}
              >
                <td className="py-2 px-2 border">
                  <button className="mx-2 px-4 py-1 bg-indigo-500 text-white border border-indigo-600 hover:bg-indigo-600 rounded-xl">
                    {row.id}mathematics
                  </button>
                </td>
                <td className="py-2 px-4 border">{row.grade}</td>
                <td className="py-2  border">
                  <p className="px-4 py-2">Mathematics in Amharic</p>
                  <hr className="border-gray-300" />
                  <p className="px-4 py-2">Mathematics in English</p>
                </td>
                <td className="py-2 px-4 border">{row.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MergedSubject;
