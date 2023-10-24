import { AddCategory } from '../../src/components/AddCategory';
import { fireEvent, render } from "@testing-library/react";

describe('Test <AddCategory />', () => {

  test('should to change the text box value', () => {
    const setCategories = jest.fn();
    const { getByRole } = render(<AddCategory setCategories={setCategories} />);
    const input = getByRole('textbox');
    const form = getByRole('form');

    //simula typing del usuario
    fireEvent.change(input, { target: { value: 'new category' } });
    expect((input as HTMLInputElement).value).toBe('new category');

    // simula el submit
    fireEvent.submit(form);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

    //checkea que el input se limpie luego del submit
    expect((input as HTMLInputElement).value).toBe('');

  });



})