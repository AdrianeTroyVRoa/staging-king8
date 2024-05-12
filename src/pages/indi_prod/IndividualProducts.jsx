import Header from "../../components/Header";
import pipes from "../../assets/pipes.jpg"

export default function IndividualProducts() {
  return (
    <div className="relative bg-zinc-100 w-full ">
      <Header />
      <div class="container flex mx-20 px-10 my-20 p-20 w-2 ">
        
        <div class="grid grid-cols-2 md:grid-cols-2 gap-4 p b-20">
          <img      
            class="pl-4 w-full md:w-3 h-auto pr-4"
            src={pipes}
            alt="image description"
          />
          <div>
            <h1 class="text-5xl md:text-5\xl lg:text-5xl font-bold leading-none tracking-tight text-red-geg dark:text-blue-950 mb-4 pl-2">
              Pipes
            </h1>
            <p class="text-blue-950 dark:text-blue-950 text-justify pl-2 mr-5 ">
              Durable, lightweight, and versatile solutions for plumbing,
              drainage, and industrial systems. They offer corrosion resistance,
              easy installation, and long-lasting performance, making them ideal
              for various applications.
            </p>
            

            <div class="grid grid-cols-1 md:grid-cols-2">
              <form class="max-w-sm mx-0 mb-4 pt-10">
                <label
                  for="countries"
                  class="text-2xl font-bold leading-none tracking-tight text-red-geg dark:text-blue-950 mb-4 pl-2 pt-10"
                >
                  Quantity:{" "}
                </label>

                <select
                  id="Quantity"
                  class="font-bold border-solid border-2 border-blue-950 text-blue-950 py-1 px-3 rounded-lg hover:bg-white "
                >
                  <option selected></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </form>
            </div>

            <div className="flex mt-1">
              <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 pt-2">
                <div className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 pl-2">
                  <button className="font-bold bg-amber-400 text-blue-950 py-3 px-4 rounded-lg hover:bg-amber-500">
                    INQUIRE NOW
                  </button>
                  <button className="font-bold border-solid border-2 border-blue-950 text-blue-950 py-3 px-4 rounded-lg hover:bg-white">
                    ADD TO INQUIRY
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex mx-20 mt-1 justify-center items-center">
              <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 pt-2">
                <div className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 pl-2">
                <button className="font-bold border-solid border-2 border-blue-950 text-blue-950 py-1 px-3 rounded-lg hover:bg-amber-400">
                  &lt;
                  </button>
                  <button className="font-bold border-solid border-2 border-blue-950 text-blue-950 py-1 px-3 rounded-lg hover:bg-amber-400">
                  &gt;
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
