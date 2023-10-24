import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('useFetchGifs', () => {

  test('should return inital state', () => {

    const { result } = renderHook(() => useFetchGifs('Harry Potter'));
    const { data, loading } = result.current;

    expect(data.length).toBe(0);
    expect(loading).toBeTruthy()

  });

  test('should return an array of images and loading in false', async () => {

    const { result } = renderHook(() => useFetchGifs('Harry Potter'));

    await waitFor(
      () => expect(result.current.data.length).toBeGreaterThan(0)
    );

    const { data, loading } = result.current;

    expect(data.length).toBeGreaterThan(0);
    expect(loading).toBeFalsy();

  })
})