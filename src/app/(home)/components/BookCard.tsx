import { BOOK } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BookCard = ({book}:{book:BOOK}) => {
  return (
    <div className='flex gap-4 p-5 border shadow-md'>
      <Image src={book.coverImage} alt={book.title} width={0} height={0} sizes='100vw' style={{width:'auto', height:"12rem"}} />
      <div>
        <h2 className='line-clamp-2 text-xl font-bold text-primary-600 text-balance'>{book.title}</h2>
        <p className='font-semibold text-primary-900 mt-1 '>{book.author.name}</p>
        <Link href={`/books/${book._id}`} className='px-2 py-2 text-primary-500 font-medium text-sm rounded border border-primary-500 inline-block mt-4 hover:border-primary-100 hover:bg-primary-100 transition'>Read More</Link>
      </div>
    </div>
  )
}

export default BookCard