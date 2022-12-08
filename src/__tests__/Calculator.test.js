import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator/Calculator';

describe('Calculator', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Calculator />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains the button 5', () => {
    render(<Calculator />);

    expect(screen.getByTestId('five')).toHaveTextContent('5');
  });
});
