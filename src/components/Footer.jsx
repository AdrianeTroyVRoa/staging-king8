function Footer(){
    return(
        <footer className="bg-zinc-300 py-8 absolute inset-x-0 bottom-0 sm:bottom-0 max-w-screen">
            <div className="container mx-auto max-w-screen-lg text-center px-4 xs:ml-8 xs:mr-8 sm:w-full">
                <div className="flex flex-cols-4 sm:flex-cols-1 md:flex-cols-2 items-center justify-between">

                    <ul className="flex flex-col justify-between text-center text-sm text-blue-950 h-24 w-24 me-16 mb-30 sm:mb-4 xs:text-center">
                        <li>
                            <div className="font-bold">PRODUCTS</div>
                        </li>
                        <li>
                            <div className="hover:underline">Inquire Now</div>
                        </li>
                        <li>
                            <div className="hover:underline">View Products</div>
                        </li>
                    </ul>

                    <ul className="flex flex-col justify-between text-center text-sm text-blue-950 mt-4 sm:mt-0 h-24 w-36 me-16 mb-30 sm:mb-4 xs:text-center">
                        <li>
                            <div className="font-bold">OUR HISTORY</div>
                        </li>
                        <li>
                            <div className="hover:underline">Background</div>
                        </li>
                        <li>
                            <div className="hover:underline">Manufacturing</div>
                        </li>
                    </ul>
                    
                    <ul className="flex flex-col justify-between items-center text-center text-sm text-blue-950 h-24 w-36 me-16 mb-30 sm:mb-4 xs:text-center">
                        <li>
                            <div className="font-bold">CUSTOMER SERVICE</div>
                        </li>
                        <li>
                            <div className="hover:underline">Call Us</div>
                        </li>
                        <li>
                            <div className="hover:underline">FAQs</div>
                        </li>
                    </ul>
                    <ul className="flex flex-col justify-between items-center text-center text-sm text-blue-950 h-24 w-36 me-16 mb-30 sm:mb-4">
                        <li>
                            <div className="font-bold">TERMS OF USE</div>
                        </li>
                        <li>
                            <div className="hover:underline">Privacy Policy</div>
                        </li>
                        <li>
                            <div className="hover:underline">Cookie Policy</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-screen mt-8 text-center text-blue-950 text-sm">© 2024 Mindanao King 8 Plastics. All Rights Reserved.</div>
        </footer>
    );
}

export default Footer;