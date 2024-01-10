"use client";
import CompleteButton from "@/components/buttons/CompleteButton";
import DeleteButton from "@/components/buttons/DeleteButton";
import EditButton from "@/components/buttons/EditButton";

interface TaskCardProps {
  title: string;
  id: string;
  description?: string | null;
  isCompleted?: boolean;
  createdAt: Date;
}

const TaskCard = ({
  id,
  title,
  description,
  isCompleted,
  createdAt,
}: TaskCardProps) => {
  const formattedDate = createdAt.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return (
    <div
      key={id}
      className="bg-white rounded-md w-58 h-40 md:w-60 md:h-48 p-4 flex flex-col justify-between items-center "
    >
      <div className="w-full text-left space-y-2">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs">{description}</p>
      </div>
      <div className="flex flex-col items-start justify-start w-full text-xs gap-y-2">
        <span className="font-semibold">{formattedDate}</span>
        <div className="w-full flex items-center justify-between">
          <CompleteButton isCompleted={isCompleted} id={id} />
          <div className="flex space-x-2">
            <DeleteButton id={id} />
            <EditButton id={id} title={title} description={description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
