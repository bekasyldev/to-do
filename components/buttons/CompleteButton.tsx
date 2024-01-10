import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface CompleteButtonProps {
  id: string;
  isCompleted: boolean | undefined;
}

const CompleteButton = ({ id, isCompleted }: CompleteButtonProps) => {
  const router = useRouter();
  const handleClick = async () => {
    try {
      console.log(id);
      const response = await axios.put("/api/completeTask", {
        id,
        isCompleted: !isCompleted, // Toggle the completion status
      });
      toast.success("Status updated");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={cn(
        "rounded-lg text-white p-2",
        isCompleted
          ? "bg-green-500 hover:bg-green-700"
          : "bg-red-500 hover:bg-red-700"
      )}
    >
      {isCompleted ? "Completed" : "Incomplete"}
    </Button>
  );
};

export default CompleteButton;
