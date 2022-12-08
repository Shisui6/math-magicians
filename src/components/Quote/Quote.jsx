import './Quote.css';

const Quote = () => {
  const quotes = ['Pure mathematics is, in its way, the poetry of logical ideas. - Albert Einstein', 'Mathematics is the most beautiful and most powerful creation of the human spirit. - Stefan Banach', 'Mathematics is the music of reason. - James Joseph Sylvester', 'Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country. - David Hilbert', 'It is impossible to be a mathematician without being a poet in soul. - Sofia Kovalevskaya', 'A mathematician who is not also something of a poet will never be a complete mathematician. - Karl Weierstrass', 'Mathematics compares the most diverse phenomena and discovers the secret analogies that unite them. - Joseph Fourier', 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. - William Paul Thurston', 'In mathematics the art of proposing a question must be held of higher value than solving it. - Georg Cantor', 'Go down deep enough into anything and you will find mathematics. - Dean Schlicter'];

  return (
    <div className="quote">
      <p data-testid="5">{quotes[0]}</p>
    </div>
  );
};

export default Quote;
