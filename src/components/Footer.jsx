function Footer() {
    return (
        <footer className="bg-zinc-300 py-8 w-full relative">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="flex justify-between">
                    <ul className="flex flex-col justify-between text-center text-sm text-blue-950 h-24 w-48 sm:mb-4">
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

                    <ul className="flex flex-col justify-between text-center text-sm text-blue-950 h-24 w-48 sm:mb-4">
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
                    
                    <ul className="flex flex-col justify-between text-center text-sm text-blue-950 h-24 w-48 sm:mb-4">
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
                    
                    <ul className="flex flex-col justify-between text-center text-sm text-blue-950 h-24 w-48 sm:mb-4">
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
            <div className="w-full mt-8 text-center text-blue-950 text-sm">© 2024 Mindanao King 8 Plastics. All Rights Reserved.</div>
        </footer>
    );
}

export default Footer;
