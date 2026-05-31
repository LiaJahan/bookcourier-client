const Banner = () => {
  return (
    <div className="carousel w-full h-[500px]">

      <div
        id="slide1"
        className="carousel-item relative w-full"
      >
        <img
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da"
          className="w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="text-white max-w-xl ml-10">
            <h2 className="text-5xl font-bold">
              Discover Your Next Favorite Book
            </h2>

            <p className="mt-4">
              Explore thousands of books from trusted librarians.
            </p>
          </div>
        </div>
      </div>

      <div
        id="slide2"
        className="carousel-item relative w-full"
      >
        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
          className="w-full object-cover"
        />
      </div>

      <div
        id="slide3"
        className="carousel-item relative w-full"
      >
        <img
          src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
          className="w-full object-cover"
        />
      </div>

    </div>
  );
};

export default Banner;