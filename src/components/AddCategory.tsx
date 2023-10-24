import { useState } from 'react';

interface Props {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AddCategory: React.FC<Props> = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCategories((categories) => [inputValue, ...categories]);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} aria-label='form'>
      <input type="text" value={inputValue} onChange={handleInputChange} name='input-text' />
    </form>
  );
};
