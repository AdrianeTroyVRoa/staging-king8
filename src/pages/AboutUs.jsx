import header from "../assets/product-7.png";
import Footer from "../components/Footer";
import Header from "../components/Header";

function About(){
    return(
        <div className="relative bg-zinc-100 w-screen h-screen">
            <Header/>
            <div className="w-screen h-72 relative bg-stone-950 mt-24">
                <div className="w-screen h-24 font-extrabold mt-24 flex justify-center items-center text-zinc-100 text-5xl absolute z-10 ">ABOUT US</div>
                    <img className="w-screen h-72 opacity-35" src={header}/>
            </div>

            <div className="w-screen h-160 relative bg-blue-950">
                <div className="2xl:container 2xl:mx-auto lg:py-48 lg:px-36 md:py-24 md:px-12 py-24 px-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="w-full lg:w-5/12 flex flex-col justify-center">
                            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-zinc-100 pb-4">Proudly Local</h1>
                            <p className="font-normal text-base leading-6 text-zinc-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam id diam maecenas ultricies. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Eu volutpat odio facilisis mauris sit. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. </p>
                        </div>
                        <div className="w-full lg:w-8/12">
                            <img className="w-full h-full rounded-lg" src={header}></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-screen relative bg-zinc-100">
                <div className="2xl:container 2xl:mx-auto lg:py-60 lg:px-36 md:py-36 md:px-12 sm:py-36 py-24 px-12">
                    <div className="flex flex-col lg:flex-row justify-between gap-16">
                        <div className="w-full lg:w-5/12 flex flex-col justify-center">
                            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-blue-950 pb-4">Quality Products for You</h1>
                            <p className="font-normal text-base leading-6 text-blue-950">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam id diam maecenas ultricies. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Eu volutpat odio facilisis mauris sit. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. </p>
                        </div>
                        <div className="w-full lg:w-5/12 flex flex-col justify-center">
                            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-blue-950 pb-4">Manufacturing</h1>
                            <p className="font-normal text-base leading-6 text-blue-950">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam id diam maecenas ultricies. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Eu volutpat odio facilisis mauris sit. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. </p>                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
    
}

export default About;
