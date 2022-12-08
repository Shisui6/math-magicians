import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Quote from '../components/Quote/Quote';

describe('Quote', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Quote />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('contains the p element', () => {
    render(<Quote />);

    expect(screen.getByTestId('5')).toHaveTextContent('Pure mathematics is, in its way, the poetry of logical ideas. - Albert Einstein');
  });
});
