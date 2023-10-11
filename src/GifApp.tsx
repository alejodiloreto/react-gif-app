import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp: React.FC = () => {
  const [categories, setCategories] = useState<string[]>(['']);

  const resetCategories = () => {
    setCategories(['']);
  }

  return (
    <main>
      <h2>GifApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <h2>Search a gif</h2>
      <button onClick={resetCategories}>Clear searches</button>
      <section>
        {categories.map((category: string) => (
          <GifGrid key={category} category={category} />
        ))}
      </section>
    </main>
  );
};
