
# Library Management System (Client)

A **Library Management System** — built with **React**, **Redux Toolkit Query (RTK Query)**, **TypeScript**, **ShadCN** and **Tailwind CSS**.

This frontend interacts with a RESTful API to manage books, handle borrowing, and display summaries — with proper state management, routing, and a smooth user experience.

---

## ✨ Key Features:

- View a list of all books in a responsive, sortable table.
- Add, edit, delete books.
- Borrow books with due date and quantity constraints.
- View a simple borrow summary.
- Proper client-side form validation and business logic.
- Clean, consistent UI with responsive layout (Tailwind CSS).
- API integration using **Redux Toolkit Query (RTK Query)**.
- Optimistic UI updates.
- Toast notifications for feedback.
- Type-safe forms using **React Hook Form**.

---

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/wahid9000/library-management-system.git
   cd library-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build production code**
   ```bash
   npm run build
   ```

---

## 📖 Available Pages & Routes

| Route                | Description                              |
|:---------------------|:------------------------------------------|
| `/`                  | Displays a banner, books in grid view & a footer |
| `/books`             | Displays a list of all books with actions |
| `/create-book`       | Add a new book form                       |
| `/books/:id`         | Detailed view of a book’s information     |
| `/edit-book/:id`     | Update an existing book                   |
| `/borrow/:bookId`    | Borrow a book with quantity & due date     |
| `/borrow-summary`    | Aggregated summary of borrowed books       |

---

## ⚙️ How RTK Query is Implemented

- **API Slice Setup**:
  A `bookApi.ts` created using `createApi()` from `@reduxjs/toolkit/query/react` for defining endpoints:

- **Hooks Usage**:
  RTK Query auto-generates React hooks like `useGetBooksQuery`, `useAddBookMutation`, `useBorrowBookMutation`, etc.

- **Auto Caching & Invalidation**:
  Endpoints are configured with `providesTags` and `invalidatesTags` to keep the cache synced. Used `refetchOnMountOrArgChange` on books query to get latest book data after borrowing.

---

## 📊 Borrow Summary Aggregation

- API returns aggregated data.
- Frontend uses `useGetBorrowSummaryQuery()` to fetch

---

## 🎨 UI/UX Overview

- **Minimalist and clean layout** using **ShadCN** and **Tailwind CSS**
- **Navigation bar** with routes to Home, Books, Add Book, Borrow Summary
- **Responsive** for mobile, tablet, desktop
- **Toast notifications** for success/error actions

---

## 📚 Tech Stack

- **React**
- **Redux Toolkit Query (RTK Query)**
- **TypeScript**
- **React Router**
- **Tailwind CSS**
- **ShadCN**
- **React Toastify**

---

## 📑 API Integration

This project communicates with the [Library Management System API](https://github.com/wahid9000/library-management-system-api.git). Make sure to run the API server first before launching the client.

---
