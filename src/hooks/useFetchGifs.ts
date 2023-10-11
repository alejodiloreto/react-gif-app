import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { Gif } from '../interfaces/gif';

interface State {
  data: Gif[];
  loading: boolean;
}

export const useFetchGifs = (category: string) => {
  const [state, setState] = useState<State>({ data: [], loading: true });

  useEffect(() => {
    getGifs(category).then((item) => {
      setState({
        data: item,
        loading: false,
      });
    });
  }, [category]);

  return state
};
