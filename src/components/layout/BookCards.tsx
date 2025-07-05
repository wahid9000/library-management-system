import { useGetBooksQuery } from "@/redux/api/bookApi";
// import bannerImg from "@/assets/banner.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookA, Eye, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import type { IBook } from "@/types";

const BookCards = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const bookData = data?.data;

  return (
    <>
      <div className="bg-indigo-950">
        <div className="w-[70%] mx-auto mb-12">
          <img src={"https://i.ibb.co/0RpGJvSz/banner.png"} alt="Banner" />
        </div>
      </div>
      <div>
        <h2 className="text-5xl font-bold text-center  ">
          <span className="border-b-4 text-indigo-950 border-indigo-950 pb-6 inline-block">
            All Books
          </span>
        </h2>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader className="animate-spin w-10 h-10 text-indigo-800" />
        </div>
      ) : bookData && bookData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-6">
          {bookData?.map((book: IBook) => (
            <Card key={book._id} className="shadow-lg border border-gray-200">
              <CardHeader>
                <CardTitle>{book.title}</CardTitle>
                <CardDescription>{book.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <p>
                  <span className="font-semibold">Author:</span> {book.author}
                </p>
                <p>
                  <span className="font-semibold">Genre:</span> {book.genre}
                </p>
                <p>
                  <span className="font-semibold">ISBN:</span> {book.isbn}
                </p>
                <p>
                  <span className="font-semibold">Copies:</span> {book.copies}
                </p>
                <p
                  className={cn(
                    "font-semibold",
                    book.available ? "text-green-700" : "text-red-700"
                  )}
                >
                  Status:{" "}
                  {book.available ? "Available" : "Currently Unavailable"}
                </p>
              </CardContent>

              <CardFooter className="justify-end gap-3">
                <Link to={`/books/${book._id}`} state={{ book }}>
                  <Button className="cursor-pointer bg-indigo-900 hover:bg-indigo-800 text-white flex items-center">
                    <Eye />
                    <h4>View</h4>
                  </Button>
                </Link>

                <Button
                  disabled={!book.available}
                  className="cursor-pointer bg-indigo-900 hover:bg-indigo-800 text-white"
                >
                  <Link
                    className="flex justify-center items-center gap-2"
                    to={`/create-borrow/${book._id}`}
                    state={{ book }}
                  >
                    <BookA />
                    Borrow
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-36">
          <p className=" text-indigo-950 font-bold">No Books Available</p>
        </div>
      )}
    </>
  );
};

export default BookCards;
