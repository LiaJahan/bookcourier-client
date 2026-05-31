const books = [
  "📖 Atomic Habits",
  "📚 Deep Work",
  "📘 Rich Dad Poor Dad",
  "📗 The Psychology of Money",
  "📙 Clean Code",
  "📕 The Alchemist",
];

const MovingBooks = () => {
  return (
    <section className="py-10 overflow-hidden bg-base-200">
      <h2 className="text-center text-3xl font-bold mb-8">
        Trending Books
      </h2>

      <div className="whitespace-nowrap animate-marquee">
        {books.map((book, index) => (
          <span
            key={index}
            className="inline-block mx-10 text-xl font-semibold"
          >
            {book}
          </span>
        ))}
      </div>
    </section>
  );
};

export default MovingBooks;