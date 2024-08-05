import { BOOK } from "@/types";
import React from "react";
import BookCard from "./BookCard";
import Loading from "../../../components/Loading";

const BookList = async () => {
  async function fetchdetails() {
   
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/books/`);
      if (!response.ok) {
        throw new Error("Could not fetch details");
      }
      const responseBody = await response.json();
      return responseBody;
    } catch (error) {
      console.log(error);
    }
  }

  const books = await fetchdetails();
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto rounded-lg mb-6">
      {books.map((book: BOOK) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
