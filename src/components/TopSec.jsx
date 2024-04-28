function TopSec() {
  return (
    <section className="bg-white dark:bg-gray-900 mt-20">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-10">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
            MINDANAO KING8 PLASTICS
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Empowering Innovation, Shaping Possibilities: Discover Quality in
            Every Mould with Us!
          </p>
          <form action="#" method="POST">
            <div className="flex max-w-2xl">
              <input
                type="text"
                name="search"
                placeholder="What are you looking for?"
                className="bg-zinc-100 w-full px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:ring-blue-400"
              />
              <button className="flex p-2 text-black rounded-r-md bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring focus:ring-primary-light">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="ml-2">Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default TopSec;
