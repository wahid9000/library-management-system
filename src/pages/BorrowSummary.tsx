import { useGetBorrowSummaryQuery } from "@/redux/api/borrowApi";

const BorrowSummary = () => {
  const { data, isLoading } = useGetBorrowSummaryQuery();
  console.log("🚀 ~ BorrowSummary ~ data:", data)
  return <div>Borrow Summary</div>;
};

export default BorrowSummary;
