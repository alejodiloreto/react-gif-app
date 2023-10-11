
export interface Props {
  title: string;
  url: string;
}

export const GifGridItem: React.FC<Props> = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <h5>{title}</h5>
      <img src={url} alt={title} />
    </div>
  );
};
