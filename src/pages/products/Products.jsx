import Footer from "./Footer";
import Header from "./Header";
import basin from "./assets/Basin_King8.png";
import bottle from "./assets/Bottle_King8.png";
import chair from "./assets/Chairs_King8.png";
import clip from "./assets/Clip_King8.png";
import gallon from "./assets/Gallon_King8.png";
import header from "./assets/Header_Sample.png";
import pipes from "./assets/Pipes_King8.png";

function Products() {
    return(
        <div className="relative bg-zinc-100 w-full h-[1800px]">
            <Header/>
            <div className="w-screen h-72 absolute bg-stone-950">
                <div className="relative">
                <div className="w-screen h-24 font-extrabold mt-24 flex justify-center items-center text-zinc-100 text-5xl absolute z-10">PRODUCTS</div>
                <img className="w-screen h-72 opacity-35 absolute" src={header}/>
                </div>
            </div>

            <div className="w-screen h-24 absolute bg-blue-950 top-96">
                    <div className="w-screen h-24 font-semibold text-center text-zinc-100 text-3xl absolute top-8">Check out our quality made products! Inquire now for more!
                    <form className="mx-auto max-w-md mt-16 ">
                <label for="default-search" className="mb-2 text-sm font-medium text-zinc-100 sr-only dark:text-white">search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-zinc-100 focus:ring-blue-950 focus:border-blue-950 " placeholder="Search Products..." required/>
                    <button type="submit" className="text-blue-950 absolute end-2.5 bottom-2.5 bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                </div>
            </form>
            </div>

            
            <div className="flex justify-center mt-72">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 absolute">
                            <div className="h-96 w-96 sm:w-96 rounded-lg bg-zinc-300 flex justify-center overflow-hidden relative">
                                <img className="w-96 h-72 sm:mb-0     rounded-b-none absolute" src={pipes}/>
                                <h3 className="font-semibold text-3xl justify-center text-center text-blue-950 top-80 absolute">PIPES</h3>
                            </div>
                            <div className="h-96 w-96 rounded-lg bg-zinc-300 flex justify-center relative ">
                                <img className="w-96 h-72 sm:mb-0    rounded-b-none absolute" src={basin}/>
                                <h3 className="font-semibold text-3xl justify-center text-center text-blue-950 top-80 absolute">BASIN</h3>
                            </div>
                            <div className="h-96 w-96 rounded-lg bg-zinc-300 flex justify-center relative ">
                                <img className="w-96 h-72 sm:mb-0    rounded-b-none absolute" src={chair}/>
                                <h3 className="font-semibold text-3xl justify-center text-center text-blue-950 top-80 absolute">CHAIRS</h3>
                            </div>
                            <div className="h-96 w-96 rounded-lg bg-zinc-300 flex justify-center relative ">
                                <img className="w-96 h-72 sm:mb-0 rounded-lg absolute" src={gallon}/>
                                <h3 className="font-semibold text-3xl justify-center text-center text-blue-950 top-80 absolute">GALLON</h3>
                            </div>
                            <div className="h-96 w-96 rounded-lg bg-zinc-300 flex justify-center relative ">
                                <img className="w-96 h-72 sm:mb-0    rounded-lg absolute" src={bottle}/>
                                <h3 className="font-semibold text-3xl justify-center text-center text-blue-950 top-80 absolute">BOTTLE</h3>
                            </div>
                            <div className="h-96 w-96 rounded-lg bg-zinc-300 flex justify-center relative ">
                                <img className="w-96 h-72 sm:mb-0    rounded-lg absolute" src={clip}/>
                                <h3 className="font-semibold text-3xl justify-center text-center text-blue-950 top-80 absolute">CLIPS</h3>
                            </div>
                        </div>
                </div>
            </div>
            

            <Footer/>
        </div>
    );
}

export default Products;