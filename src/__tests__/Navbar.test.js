import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

describe('Navbar', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Router>
        <Navbar />
      </Router>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains the calculator link', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );

    expect(screen.getByText('Calculator')).toHaveClass('link');
  });
});
