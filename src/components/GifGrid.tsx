import { useFetchGifs } from '../hooks/useFetchGifs';
import { Gif } from '../interfaces/gif';
import { GifGridItem } from './GifGridItem';

interface Props {
  category: string;
}

export const GifGrid: React.FC<Props> = ({ category }) => {

  const { data, loading } = useFetchGifs(category);

  return (
    <article>
      <h3>{category}</h3>

      {loading && <p className="animate__animated animate__flash">Cargando...</p>}

      <div className="card-grid">
        {data.map((item: Gif) => (
          <GifGridItem key={item.id} {...item} />
        ))}
      </div>
    </article>
  );
};
