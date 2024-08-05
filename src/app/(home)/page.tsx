"use client";

import React, { useEffect, useState } from 'react'
import Banner from './components/Banner'
import BookList from './components/BookList'

export default async function Home() {
  async function fetchdetails() {
    const response = await fetch(
      `${process.env.BACKEND_URL}/books/`
    );
    if (response.ok) {
      const responseBody = await response.json();
      console.log(`data ${responseBody}`);
      return responseBody;
    }
  }

  const books = await fetchdetails();

 
  return (
      <>
        <Banner/>
        <BookList/>
      </>
  );
}
