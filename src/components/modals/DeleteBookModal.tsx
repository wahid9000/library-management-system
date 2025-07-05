import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useDeleteBookMutation } from "@/redux/api/bookApi";
import { Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

interface IDeleteProps {
  id: string;
}

const DeleteBookModal = ({ id }: IDeleteProps) => {
  const [deleteBook] = useDeleteBookMutation();
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    const res = await deleteBook(id);
    if (res) {
      toast("Book deleted successfully");
    }
  };

  const handleModalOpen = () => {
    setOpen(!open);
  };
  return (
    <AlertDialog open={open} onOpenChange={handleModalOpen}>
      <AlertDialogTrigger asChild>
        <Trash className="text-red-900 cursor-pointer rounded-full p-1 hover:bg-red-100 transition-all duration-300 hover:scale-110" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Book?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            book.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDelete()}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteBookModal;
