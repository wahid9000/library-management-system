export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
  createdAt: string;
  updatedAt: string;
}

interface IBorrowedBook {
  title: string;
  isbn: string;
}

export interface IBorrow {
  book: IBorrowedBook;
  totalQuantity: number;
}
