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
        <div className="relative bg-zinc-100 w-full h-full sm:w-full sm:h-screen">
            <Header/>
            
            <div className="w-screen h-72 relative bg-stone-950">
                <div className="w-screen h-24 font-extrabold top-20 flex justify-center items-center text-zinc-100 text-5xl absolute z-10">PRODUCTS</div>
                <div className="w-screen h-24 font-normal top-40 text-center text-zinc-100 md:text-2xl sm:text-xl absolute  z-10">Check out our quality made products! Inquire now for more!</div>
                <img className="w-screen h-72 opacity-35 absolute" src={header}/>
            </div>

            <div className="w-screen h-24 relative bg-blue-950">
                <form className="mx-auto max-w-md relative top-5">
                    <label for="default-search" className="mb-2 text-sm font-medium text-zinc-100 sr-only dark:text-white">search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-blue-950" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path>
                                </svg>
                            </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-zinc-100 focus:ring-blue-950 focus:border-blue-950 " placeholder="Search Products..." required/>
                        <button type="submit" className="text-blue-950 absolute end-2.5 bottom-2.5 bg-amber-400 hover:bg-blue-950 hover:text-zinc-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                    </div>
                </form>
            </div>

            <div className="w-full relative bg-zinc-100">
                <div className="flex justify-center h-auto mb-16 relative top-8 md:top-8">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="h-72 w-80 rounded-lg bg-blue-950 flex justify-center relative">
                            <img className="w-96 h-60 rounded-b-none absolute hover:opacity-50" src={pipes}/>
                            <h3 className="font-extrabold text-2xl justify-center text-center text-zinc-100 top-60 mt-2 absolute">PIPES</h3>
                        </div>
                        <div className="h-72 w-80 rounded-lg bg-blue-950 flex justify-center relative">
                            <img className="w-96 h-60 rounded-b-none absolute hover:opacity-50" src={basin}/>
                            <h3 className="font-extrabold text-2xl justify-center text-center text-zinc-100 top-60 mt-2 absolute">BASIN</h3>
                        </div>
                        <div className="h-72 w-80 rounded-lg bg-blue-950 flex justify-center relative">
                            <img className="w-96 h-60 rounded-b-none absolute hover:opacity-50" src={chair}/>
                            <h3 className="font-extrabold text-2xl justify-center text-center text-zinc-100 top-60 mt-2 absolute">CHAIRS</h3>
                        </div>
                        <div className="h-72 w-80 rounded-lg bg-blue-950 flex justify-center relative">
                            <img className="w-96 h-60 sm:mb-0 rounded-lg absolute hover:opacity-50" src={gallon}/>
                            <h3 className="font-extrabold text-2xl justify-center text-center text-zinc-100 top-60 mt-2 absolute">GALLON</h3>
                        </div>
                        <div className="h-72 w-80 rounded-lg bg-blue-950 flex justify-center relative">
                            <img className="w-96 h-60 rounded-lg absolute hover:opacity-50" src={bottle}/>
                            <h3 className="font-extrabold text-2xl justify-center text-center text-zinc-100 top-60 mt-2 absolute">BOTTLE</h3>
                        </div>
                        <div className="h-72 w-80 rounded-lg bg-blue-950 flex justify-center relative">
                            <img className="w-96 h-60 rounded-lg absolute hover:opacity-50  " src={clip}/>
                            <h3 className="font-extrabold text-2xl justify-center text-center text-zinc-100 top-60 mt-2 absolute">CLIPS</h3>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            
            
        </div>
        
    );
}

export default Products;