import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

afterEach(cleanup);

describe('NavBar', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Navbar />, { wrapper: BrowserRouter });

    expect(asFragment(<Navbar />)).toMatchSnapshot();
  });

  it('contains the calculator link', () => {
    render(<Navbar />, { wrapper: BrowserRouter });

    expect(screen.getByText('Calculator')).toHaveClass('link');
  });
});
