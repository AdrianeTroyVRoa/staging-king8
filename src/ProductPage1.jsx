import Footer from "./Footer";
import Header from "./Header";
import pipes from "./assets/Pipes_King8.png";

function ProductPage1() {
  return (
    <div className="relative bg-zinc-100 w-full h-[1800px]">
      <Header />
      <div class="container flex mx-auto px-4 pt-20 p-20 w-1/4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20">
                <img class="pl-6 w-full md:w-3/4 h-auto rounded-lg pr-4" src={pipes} alt="image description"/>
                  <div>
                    <h1 class="text-5xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tight text-red-geg dark:text-blue-950 mb-4 pl-5">Pipes</h1>
                    <p class="text-blue-950 dark:text-blue-950 text-justify pl-5">
                    Durable, lightweight, and versatile solutions for plumbing, drainage, and industrial systems.
                    They offer corrosion resistance, easy installation, and long-lasting performance, making them ideal for various applications.
                    </p>

                  <div class="grid grid-cols-1 md:grid-cols-2">
                  

                   
                  </div>

                    <div className="flex mt-1">
              <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 pt-5">
                <div className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 pl-6">
                  <a className="font-bold bg-amber-400 text-blue-950 py-3 px-4 rounded-lg hover:bg-amber-500">INQUIRE NOW</a>
                  <a className="font-bold border-solid border-2 border-blue-950 text-blue-950 py-3 px-4 rounded-lg hover:bg-white">ADD TO INQUIRY</a>
                </div>
              </div>
            </div>
            
                  </div>
                  
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage1;
