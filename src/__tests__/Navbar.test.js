import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

describe('NavBar', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<NavBar />, { wrapper: BrowserRouter });

    expect(asFragment(<NavBar />)).toMatchSnapshot();
  });

  it('contains the calculator link', () => {
    render(<NavBar />, { wrapper: BrowserRouter });

    expect(screen.getByText('Calculator')).toHaveClass('link');
  });
});
