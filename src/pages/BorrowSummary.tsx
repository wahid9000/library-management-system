import { useGetBorrowSummaryQuery } from "@/redux/api/borrowApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader } from "lucide-react";
import type { IBorrow } from "@/types";

const BorrowSummary = () => {
  const { data, isLoading } = useGetBorrowSummaryQuery(undefined);
  const borrowSummary = data?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin w-10 h-10 text-indigo-800" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold ">Borrow Summary</h1>
      </div>
      <Table className="border border-gray-200 shadow-sm rounded-lg">
        <TableCaption className="text-gray-500">
          A summary of borrowed books.
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="w-[200px] font-semibold text-gray-700">
              Title
            </TableHead>
            <TableHead className="font-semibold text-gray-700">ISBN</TableHead>
            <TableHead className="font-semibold text-gray-700">
              Total Borrowed
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {borrowSummary && borrowSummary?.length > 0 ? (
            borrowSummary.map((item : IBorrow, index: number) => (
              <TableRow key={index} className="hover:bg-gray-50 transition">
                <TableCell className="font-medium">{item.book.title}</TableCell>
                <TableCell>{item.book.isbn}</TableCell>
                <TableCell>{item.totalQuantity}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center py-6">
                No Borrow Summary Available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default BorrowSummary;
