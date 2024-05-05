import AdminHeader from "../../components/AdminHeader";
export default function AddProduct(){
    return(
        <div className="relative bg-zinc-100 w-full h-full sm:w-full sm:h-screen">
            <AdminHeader/>

            <section className="bg-zinc-100">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-extrabold text-blue-950">Add a new product</h2>
                    <form action="#">
                        <div class="relative w-40 h-40 overflow-hidden bg-zinc-100 border border-gray-300 rounded-lg mb-4">
                            
                        </div>
                        <div className="grip gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2 mb-6">
                                <label for="name" className="block mb-2 text-md font-medium text-blue-950">Product Name</label>
                                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type product name" required=""></input>
                            </div>
                            <div className="sm:col-span-2">
                                <label for="description" className="block mb-2 text-md font-medium text-gray-900">Description</label>
                                <textarea id="description" rows="6" className="block p-2.5 w-full text-sm text-blue-950 bg-grey-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Your description here"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}