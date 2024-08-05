import { BOOK } from '@/types'
import React from 'react'
import BookCard from './BookCard'

const BookList = ({books} : {books : BOOK[]}) => {
  return (
    <div className='grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto rounded-[5px]'>
      {
        books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))
      }
    </div>
  )
}

export default BookList