import { useGetBooksQuery } from "@/redux/api/bookApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Delete, Edit, Loader, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

const Books = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  console.log("🚀 ~ Books ~ data:", data);

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
        <h1 className="text-3xl font-bold ">All Books</h1>
        <Button className="bg-indigo-950 cursor-pointer hover:bg-indigo-800">
          + Add New Book
        </Button>
      </div>
      <Table className="border border-gray-200 shadow-sm rounded-lg">
        <TableCaption className="text-gray-500">
          A list of all available books.
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
              Available Copies
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
          {data?.data?.map((book) => (
            <TableRow key={book._id} className="hover:bg-gray-50 transition">
              <TableCell className="font-medium">{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.genre}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>{book.copies}</TableCell>
              <TableCell>{book.available ? "Available" : "Stockout"}</TableCell>
              <TableCell>
                <div className="flex justify-center items-center ">
                  <Edit className="text-green-900 cursor-pointer rounded-full p-1 hover:bg-green-100 transition-all duration-300 hover:scale-110" />
                  <Trash className="text-red-900 cursor-pointer rounded-full p-1 hover:bg-red-100 transition-all duration-300 hover:scale-110 ml-2" />
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
