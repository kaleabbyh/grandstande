import { Link } from "react-router-dom";
import { useState } from "react";

const SubHeader: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab === selectedTab ? "" : tab);
  };

  return (
    <div className="flex px-2 border-b border-indigo-100 rounded-md my-4">
      <Link
        to="/managesubject"
        onClick={() => handleTabClick("manage")}
        className={`rounded-md px-4 py-2 text-indigo-600 text-sm ${
          selectedTab === "manage" ? "border border-indigo-200" : ""
        }`}
      >
        Manage Subject
      </Link>
      <Link
        to="/mergedsubject"
        onClick={() => handleTabClick("merged")}
        className={`rounded-md px-4 py-2 text-indigo-600 text-sm ${
          selectedTab === "merged" ? "border border-indigo-200" : ""
        }`}
      >
        Merged Subject
      </Link>
      <Link
        to="/studentlist"
        onClick={() => handleTabClick("sub")}
        className={`rounded-md px-4 py-2 text-indigo-600 text-sm ${
          selectedTab === "sub" ? "border border-indigo-200" : ""
        }`}
      >
        Sub Subject
      </Link>
    </div>
  );
};

export default SubHeader;
