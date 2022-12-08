import { render, screen } from '@testing-library/react';
import Quote from '../components/Quote/Quote';

describe('Quote', () => {
  it('contains the p element', () => {
    render(<Quote />);

    expect(screen.getByTestId('5')).toBeInTheDocument();
  });
});
