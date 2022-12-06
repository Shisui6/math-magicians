const Quote = () => {
  const quotes = ['Pure mathematics is, in its way, the poetry of logical ideas. - Albert Einstein', 'Mathematics is the most beautiful and most powerful creation of the human spirit. - Stefan Banach', 'Mathematics is the music of reason. - James Joseph Sylvester', 'Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country. - David Hilbert', 'It is impossible to be a mathematician without being a poet in soul. - Sofia Kovalevskaya'];

  return (
    <div className="quote">
      <p>{quotes[Math.floor(Math.random() * 5)]}</p>
    </div>
  );
};

export default Quote;
