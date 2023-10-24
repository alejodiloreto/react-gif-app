import { render, screen } from "@testing-library/react"
import { GifGridItem } from '../../src/components/GifGridItem';

describe('<GifGridItem />', () => {

  const title = 'titulo';
  const url = 'url';

  it('should render <GifGridItem />', () => {
    const { container } = render(<GifGridItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  })

  it('should show image with an URL and Alt', () => {
    render(<GifGridItem title={title} url={url} />);
    const { src, alt } = screen.getByRole('img') as HTMLImageElement;
    expect(src).toMatch(new RegExp(url + '$'));
    expect(alt).toBe(title);
  })

  it('should show the component title', () => {
    render(<GifGridItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  })

})