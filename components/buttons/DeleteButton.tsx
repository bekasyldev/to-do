import axios from "axios";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const handleClick = async () => {
    try {
      // Send DELETE request to delete the task
      const response = await axios.delete("/api/deleteTask", {
        data: { id },
      });
      toast.success("Task deleted successfully");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <button onClick={handleClick}>
      <Trash size={20} />
    </button>
  );
};

export default DeleteButton;
