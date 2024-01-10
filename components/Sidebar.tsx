import Link from "next/link";
import {
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  LogIn,
  User,
} from "lucide-react";

const Sidebar = () => {
  return (
    <nav className="w-auto sticky top-0 sm:w-80 h-screen mb-2 pt-10 p-4 md:p-10 overflow-y-auto">
      <div className="flex flex-col h-full items-center justify-between bg-slate-200 rounded-md py-8">
        <div className="flex items-end gap-x-2">
          <User size={25} />
          <p className="hidden sm:block">Profile</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-y-4">
          <Link href={"/"} className="flex gap-x-3 items-center">
            <ClipboardList className="mx-4" />
            <span className="hidden sm:block">All Tasks</span>
          </Link>
          <Link
            href={"/tasks/incompleted"}
            className="flex gap-x-3 items-center"
          >
            <CalendarClock className="mx-4" />
            <span className="hidden sm:block">In Progress</span>
          </Link>
          <Link href={"/tasks/completed"} className="flex gap-x-3 items-center">
            <CheckCircle2 className="mx-4" />
            <span className="hidden sm:block">Done</span>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href={"/log-in"} className="flex items-center space-x-2">
            <LogIn size={20} className="mr-2" />
            <span className="hidden sm:block">Sign up</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
