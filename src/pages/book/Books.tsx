import { useGetBooksQuery } from "@/redux/api/bookApi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BookA, Edit, Eye, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import type { IBook } from "@/types";
import DeleteBookModal from "@/components/modals/DeleteBookModal";
import { cn } from "@/lib/utils";

const Books = () => {
  const { data, isLoading } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin w-10 h-10 text-indigo-800" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold ">
          All Books - {data?.meta?.total || 0}
        </h1>
        <Link to={"/create-book"}>
          <Button className="bg-indigo-950 cursor-pointer hover:bg-indigo-800">
            + Add New Book
          </Button>
        </Link>
      </div>
      <Table className="border border-gray-200 shadow-sm rounded-lg">
        <TableCaption className="text-gray-500">
          <span>
            A list of {data?.meta?.total || 0} available{" "}
            {data?.meta?.total > 0 ? "books" : "book"}.
          </span>
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="w-[180px] font-semibold text-gray-700">
              Title
            </TableHead>
            <TableHead className="font-semibold text-gray-700">
              Author
            </TableHead>
            <TableHead className="font-semibold text-gray-700">Genre</TableHead>
            <TableHead className="font-semibold text-gray-700">ISBN</TableHead>
            <TableHead className="font-semibold text-gray-700">
              Copies
            </TableHead>
            <TableHead className="font-semibold text-gray-700">
              Availability
            </TableHead>
            <TableHead className="font-semibold text-gray-700">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((book: IBook) => (
            <TableRow key={book._id} className="hover:bg-gray-50 transition">
              <TableCell className="font-medium">{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.genre}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>{book.copies}</TableCell>
              <TableCell>
                <span
                  className={cn(
                    "font-medium",
                    book.available ? "text-green-700" : "text-red-700"
                  )}
                >
                  {book.available ? "Available" : "Currently Unavailable"}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex justify-center items-center space-x-2">
                  <TooltipProvider>
                    {/* View */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link to={`/books/${book._id}`}>
                          <Eye className="text-black cursor-pointer rounded-full p-1 hover:bg-green-100 transition-all duration-300 hover:scale-110" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View Book</p>
                      </TooltipContent>
                    </Tooltip>

                    {/* Edit */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link to={`/edit-book/${book._id}`} state={{ book }}>
                          <Edit className="text-green-900 cursor-pointer rounded-full p-1 hover:bg-green-100 transition-all duration-300 hover:scale-110" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Edit Book</p>
                      </TooltipContent>
                    </Tooltip>

                    {/* Delete */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>
                          <DeleteBookModal id={book._id} />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delete Book</p>
                      </TooltipContent>
                    </Tooltip>

                    {/* Borrow Book */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          to={`/create-borrow/${book._id}`}
                          state={{ book }}
                        >
                          <BookA className="text-black cursor-pointer rounded-full p-1 hover:bg-green-100 transition-all duration-300 hover:scale-110" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Borrow Book</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Books;
