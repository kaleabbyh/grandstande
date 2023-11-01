import { Link } from "react-router-dom";

const SubHeader = () => {
  return (
    <div className="flex px-2 border-b border-indigo-100 rounded-md my-4">
      <Link
        to="/managesubject"
        className={` rounded-md px-4 py-2 text-indigo-600 text-sm border border-indigo-200 `}
      >
        Manage Subject
      </Link>
      <Link
        to="/mergedsubject"
        className={` rounded-md px-4 py-2 text-indigo-600 text-sm `}
      >
        Merged Subject
      </Link>

      <Link
        to="/studentlist"
        className={` rounded-md px-4 py-2 text-indigo-600 text-sm `}
      >
        Sub Subject
      </Link>
    </div>
  );
};

export default SubHeader;
