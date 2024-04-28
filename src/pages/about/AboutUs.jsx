import Footer from "./Footer";
import Header from "./Header";
import header from "./assets/Header_Sample.png";

function About(){
    return(
        <div className="relative bg-zinc-100 w-screen h-[2500px]">
            <Header/>
            <div className="w-screen h-72 relative bg-stone-950">
                <div className="w-screen h-24 font-extrabold mt-24 flex justify-center items-center text-zinc-100 text-5xl absolute z-10 ">ABOUT US</div>
                    <img className="w-screen h-72 opacity-35" src={header}/>
                    <div className="w-screen h-160 relative bg-stone-950 top-0">
                    
                </div>

            </div>

            <div className="w-screen h-160 relative bg-blue-950 top-0">
                <div className="container w-96 h-72 absolute bg-zinc-300 flex items-center justify-between top-40 left-1/2 rounded-xl mx-36">
                    <div className="w-48 h-8 left-8 top-16 font-bold mt-0 flex items-center text-blue-950 text-2xl absolute z-10">Proudly Local</div>
                    <div className="w-48 h-24 left-8 top-16 font-normal mt-8 flex items-center text-blue-950 text-lg absolute z-10">Mindanao King8 Plastic is based in Cagayan de Oro City, Philippines.</div>
                </div>
            </div>

            <div className="w-screen h-160 relative bg-stone-950 top-160">
                <img className="w-screen h-full opacity-35" src={header}/>
                <div className="container w-96 h-72 absolute bg-blue-950 flex items-center justify-between top-40 left-1/2 rounded-xl mx-36">
                    <div className="w-48 h-0 left-8 top-16 font-bold mt-0 flex items-center text-zinc-100 text-2xl absolute z-10">Manufacturing</div>
                    <div className="w-60 h-32 left-8 top-24 font-normal mt-0 flex items-center text-zinc-100 text-lg absolute z-10">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                </div>
            </div>

            <div className="w-screen h-160 relative bg-zinc-100 top-160">
                <div className="container w-96 h-72 absolute bg-zinc-100 flex items-center justify-between top-40 left-1/2 rounded-xl mx-36 stroke-blue-950 stroke-2">
                    <div className="w-48 h-0 left-8 top-16 font-bold mt-0 flex items-center text-blue-950 text-2xl absolute z-10">Quality Products For You</div>
                    <div className="w-60 h-32 left-8 top-24 font-normal mt-0 flex items-center text-blue-950 text-lg absolute z-10">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                </div>
            </div>
            <Footer/>
        </div>
    );
    
}

export default About;
