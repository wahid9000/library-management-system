import App from "@/App";
import BookInformation from "@/pages/BookInformation";
import Books from "@/pages/Books";
import BorrowSummary from "@/pages/BorrowSummary";
import CreateBook from "@/pages/CreateBook";
import EditBook from "@/pages/EditBook";
import { createBrowserRouter } from "react-router";

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
        path: "/borrow-summary",
        element: <BorrowSummary />,
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
    ],
  },
]);

export default router;
