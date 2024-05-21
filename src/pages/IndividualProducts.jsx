import "../style/output.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";

export default function IndividualProducts() {
  const [product, setProduct] = createSignal('');
  const [image, setImage] = createSignal('');
  const [description, setDiscrption] = createSignal('');


  return (
    <div className="relative bg-zinc-100 w-full min-h-screen flex flex-col items-center">
      <Header />
      <div className="container mx-auto my-20 p-10 pt-10 bg-zinc-100 shadow-md rounded-md flex flex-col items-center">
        
        {/* Main Content Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          
          {/* Image Container */}
          <div className="flex justify-center">
            <img
              className="w-full h-auto md:w-1/2"
              src={image()}
              alt="image description"
            />
          </div>
          
          {/* Text and Button Container */}
          <div className="flex flex-col items-start">
            <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold leading-none tracking-tight text-red-geg dark:text-blue-950 mb-4">
              {product()}
            </h1>
            <p className="text-blue-950 dark:text-blue-950 text-justify mb-6">
              {description()}
            </p>
            
            <div className="w-full flex justify-start mt-10">
              <button href="#" className="font-bold bg-amber-400 text-blue-950 py-3 px-4 rounded-lg hover:bg-amber-500">
                INQUIRE NOW
              </button>
            </div>
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex justify-center items-center mt-10">
          <button className="font-bold border-solid border-2 border-blue-950 text-blue-950 py-2 px-4 rounded-lg hover:bg-amber-400 mx-2">
            &lt;
          </button>
          <button className="font-bold border-solid border-2 border-blue-950 text-blue-950 py-2 px-4 rounded-lg hover:bg-amber-400 mx-2">
            &gt;
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
