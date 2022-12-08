import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home/Home';

describe('Home', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('contains the p element', () => {
    render(<Home />);

    expect(screen.getByText('Hello Traveler!')).toBeInTheDocument();
  });
});
