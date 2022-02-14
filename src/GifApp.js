import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {
  const [categories, setCategories] = useState(['']);

  return (
    <>
      <h2>GifApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <h2>Search a gif</h2>
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
