import TaskCard from "./TaskCard";
import { db } from "@/lib/db";
import AddTask from "./AddTask";

const Tasks = async () => {
  const tasks = await db.task.findMany({});
  return (
    <section className="w-full pt-10 p-4 md:pl-0 md:p-10 pl-0 overflow-y-auto">
      <div className="bg-slate-200 rounded-md p-4 md:p-8 space-y-4">
        <h1 className="font-semibold text-2xl">All Tasks</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              isCompleted={task.isCompleted}
              title={task.title}
              createdAt={task.createdAt}
              description={task.description}
            />
          ))}
          <AddTask />
        </div>
      </div>
    </section>
  );
};

export default Tasks;
