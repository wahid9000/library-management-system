import App from "@/App";
import BookInformation from "@/pages/book/BookInformation";
import Books from "@/pages/book/Books";
import BorrowSummary from "@/pages/borrow/BorrowSummary";
import CreateBook from "@/pages/book/CreateBook";
import EditBook from "@/pages/book/EditBook";
import { createBrowserRouter } from "react-router";
import CreateBorrow from "@/pages/borrow/CreateBorrow";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: `/books/:id`,
        element: <BookInformation />,
      },
      {
        path: "/create-book",
        element: <CreateBook />,
      },
      {
        path: `/edit-book/:id`,
        element: <EditBook />,
      },

      {
        path: "/borrow-summary",
        element: <BorrowSummary />,
      },
      {
        path: "/create-borrow/:id",
        element: <CreateBorrow />,
      },
    ],
  },
]);

export default router;
