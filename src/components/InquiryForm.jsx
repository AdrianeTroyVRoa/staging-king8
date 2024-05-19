import 'flowbite/dist/flowbite.min.css';
import 'flowbite/dist/flowbite.min.js';

function InquiryForm() {
    const openDeleteWindow = () => {
        document.getElementById("delete_window").classList.remove("hidden");
    };

    return (
        <div className="flex justify-center items-center h-full bg-gray-100">
            <div className="max-w-screen-xl px-4 py-48 lg:py-16">
                <div className="mt-6 sm:mt-8 md:gap-6 flex flex-col items-center xl:gap-8 justify-center">
                    <div className="flex flex-col justify-center items-center mx-auto w-full lg:max-w-2xl xl:max-w-4xl space-y-6">
                        <section className="bg-white dark:bg-gray-900">
                            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                <h2 className="mb-4 p-5 text-4xl tracking-tight font-extrabold text-center text-blue-900 dark:text-white">Inquiry Form</h2>

                                {/* First Product */}
                                <div className="border-t border-b border-blue-800 py-4">
                                    <div className="bg-white shadow-sm dark:bg-gray-800 md:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                                        <div className="order-1 sm:order-1">
                                            <input type="number" id="number_products" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="200" required />
                                        </div>
                                        <div className="order-2 sm:order-2 flex flex-col sm:items-start text-center sm:text-left">
                                            <a href="#" className="text-base font-bold text-blue-900 hover:underline dark:text-white">Pipes</a>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Lectus quam id leo in vitae turpis massa sed elementum</p>
                                        </div>
                                        <div className="order-3 sm:order-3 flex items-center gap-1">
                                            <button onClick={openDeleteWindow} id="delete_button" className="w-auto inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                                <svg className="mr-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L17.94 6M18 18L6.06 6" />
                                                </svg>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Second Product */}
                                <div className="border-b border-blue-800 py-4">
                                    <div className="bg-white shadow-sm dark:bg-gray-800 md:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                                        <div className="order-1 sm:order-1">
                                            <input type="number" id="number_products" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="200" required />
                                        </div>
                                        <div className="order-2 sm:order-2 flex flex-col sm:items-start text-center sm:text-left">
                                            <a href="#" className="text-base font-bold text-blue-900 hover:underline dark:text-white">Chairs</a>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Lectus quam id leo in vitae turpis massa sed elementum</p>
                                        </div>
                                        <div className="order-3 sm:order-3 flex items-center gap-1">
                                            <button onClick={openDeleteWindow} id="delete_button" className="w-auto inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                                <svg className="mr-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L17.94 6M18 18L6.06 6" />
                                                </svg>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                 {/* Third Product */}
                                 <div className="border-b border-blue-800 py-4">
                                    <div className="bg-white shadow-sm dark:bg-gray-800 md:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                                        <div className="order-1 sm:order-1">
                                            <input type="number" id="number_products" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="200" required />
                                        </div>
                                        <div className="order-2 sm:order-2 flex flex-col sm:items-start text-center sm:text-left">
                                            <a href="#" className="text-base font-bold text-blue-900 hover:underline dark:text-white">Basins</a>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Lectus quam id leo in vitae turpis massa sed elementum</p>
                                        </div>
                                        <div className="order-3 sm:order-3 flex items-center gap-1">
                                            <button onClick={openDeleteWindow} id="delete_button" className="w-auto inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                                <svg className="mr-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L17.94 6M18 18L6.06 6" />
                                                </svg>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                    

                                <div className="border-b border-blue-800 pb-4 pt-3 mx-10 order-2 sm:order-2 flex flex-col items-center sm:items-start text-center sm:text-left">
                                    <a href="#" className="text-base font-bold text-blue-900 hover:underline dark:text-white">Add more items</a>
                                </div>


                                <form action="#" className="space-y-8 pt-5">
                                    <div className="sm:col-span-1">
                                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Other details..."></textarea>
                                    </div>
                                    <div className="flex justify-center">
                                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirm</button>
                                    </div>
                                </form>
                            </div>
                        </section>

                        {/* Delete Confirmation Window */}
                        <div id="delete_window" className="hidden fixed top-0 left-0 w-full h-full px-4 flex justify-center items-center bg-black bg-opacity-50">
                            <div className="absolute h-40 w-96 shadow-lg p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50">
                                <div className="flex items-center">
                                    <svg className="flex-shrink-0 w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                    </svg>
                                    <span className="sr-only">Info</span>
                                    <h3 className="text-lg font-medium">Warning!</h3>
                                </div>
                                <div className="mt-2 mb-4 text-sm">Are you sure you want to delete? This action cannot be undone.</div>
                                <div className="flex justify-center space-x-4">
                                    <button type="button" className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center">
                                        Yes, Delete
                                    </button>
                                    <button onClick={() => document.getElementById("delete_window").classList.add("hidden")} type="button" className="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center" aria-label="Close">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default InquiryForm;
