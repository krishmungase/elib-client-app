import { BOOK } from '@/types';
import Image from 'next/image';
import React from 'react'

const SingleBookPage = async({ params }: { params: { bookid: string } }) => {
  async function fetchdetails() {
    const response = await fetch(
      `${process.env.BACKEND_URL}/books/${params.bookid}`
    );
    if (!response.ok) {
     throw new Error("Could not fetch details");
    }
    const responseBody = await response.json();
    return responseBody;
  }

  const book = await fetchdetails();

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
      <div className="col-span-2 pr-16 text-primary-950">
        <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
        <span className="font-semibold">by {book.author.name}</span>
        <p className="mt-5 text-lg leading-8">{book.description}</p>
      </div>
      <div className="flex justify-end">
        <Image
          src={book.coverImage}
          alt={book.title}
          className="rounded-md border"
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: 'auto', height: '25rem' }}
        />
      </div>
    </div>
  )
}

export default SingleBookPage