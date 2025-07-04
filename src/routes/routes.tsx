import App from "@/App";
import BookInformation from "@/pages/BookInformation";
import Books from "@/pages/Books";
import CreateBook from "@/pages/CreateBook";
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
        path: `/books/:id`,
        element: <BookInformation />,
      },
      {
        path: "/create-book",
        element: <CreateBook />,
      },
    ],
  },
]);

export default router;
