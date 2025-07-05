import { useGetBookQuery } from "@/redux/api/bookApi";
import { Loader } from "lucide-react";
import { useParams } from "react-router";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const BookInformation = () => {
  const params = useParams();
  const { data: getBook, isLoading } = useGetBookQuery(params?.id);
  const book = getBook?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin w-10 h-10 text-indigo-800" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="shadow-xl rounded-2xl border border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{book.title}</CardTitle>
          <CardDescription className="text-base text-gray-500">
            by {book.author}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <span className="font-semibold">Genre:</span> {book.genre}
          </div>
          <div>
            <span className="font-semibold">ISBN:</span> {book.isbn}
          </div>
          <div>
            <span className="font-semibold">Copies Available:</span>{" "}
            {book.copies}
          </div>
          <div>
            <span className="font-semibold">Available for Borrowing:</span>{" "}
            <span
              className={
                book.available
                  ? "text-green-600 font-medium"
                  : "text-red-500 font-medium"
              }
            >
              {book.available ? "Yes" : "No"}
            </span>
          </div>
          <div>
            <span className="font-semibold">Description:</span>
            <p className="mt-1 text-gray-600">{book.description}</p>
          </div>
          <div className="text-sm text-gray-400">
            Added on: {new Date(book.createdAt).toLocaleDateString()}
          </div>
          <div className="text-sm text-gray-400">
            Last Updated: {new Date(book.updatedAt).toLocaleDateString()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookInformation;
