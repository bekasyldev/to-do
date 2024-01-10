import AddTask from "@/components/AddTask";
import TaskCard from "@/components/TaskCard";
import { db } from "@/lib/db";

const page = async () => {
  const incompleteTasks = await db.task.findMany({
    where: {
      isCompleted: false,
    },
  });
  return (
    <section className="w-full pt-10 pl-0 p-4 md:p-10 md:pl-0 overflow-y-auto">
      <div className="bg-slate-200 rounded-md p-4 md:p-8 space-y-4">
        <h1 className="font-semibold text-2xl">All Tasks</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {incompleteTasks.map((task) => (
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

export default page;
