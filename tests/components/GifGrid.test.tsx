
import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('<GifGrid />', () => {

  const category = 'Harry Potter'

  test('should show initial loading', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  })

  test('should show items when useFetchGifs images load', () => {

    const gifs = [
      {
        id: 'ABC',
        title: 'Harry Potter',
        utl: 'https://localhost/harry-potter.jpg'
      },
      {
        id: 'ABC',
        title: 'Saitama',
        utl: 'https://localhost/saitama.jpg'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);

  })

})