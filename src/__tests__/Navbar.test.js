import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import Navbar from '../components/Navbar/Navbar';

describe('Navbar', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Navbar />, { wrapper: BrowserRouter });

    expect(asFragment(<Navbar />)).toMatchSnapshot();
  });

  it('contains the calculator link', () => {
    render(<Navbar />, { wrapper: BrowserRouter });

    expect(screen.getByText('Calculator')).toHaveClass('link');
  });
});
