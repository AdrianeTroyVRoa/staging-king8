import { createSignal } from "solid-js";
import basin from "../../assets/Basin_King8.png";
import bottle from "../../assets/Bottle_King8.png";
import chairs from "../../assets/Chairs_King8.png";
import clips from "../../assets/Clip_King8.png";
import gallon from "../../assets/Gallon_King8.png";
import pipes from "../../assets/Pipes_King8.png";
import AdminHeader from "../../components/AdminHeader";

export default function AdminProducts (){
    const [isEditModalOpen, setIsEditModalOpen] = createSignal(false);
    const [isAddModalOpen, setIsAddModalOpen] = createSignal(false);
    const openEditWindow = () => setIsEditModalOpen(true);
    const closeEditWindow = () => setIsEditModalOpen(false);
    const openAddWindow = () => setIsAddModalOpen(true);
    const closeAddWindow = () => setIsAddModalOpen(false);

    return(
        <div className="relative bg-zinc-100 w-full h-full sm:w-full sm:h-screen">
            <AdminHeader/>

            <section className="py-1 bg-zinc-100">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-12">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 className="font-extrabold text-base text-blue-950">Product Editor</h3>
                                </div>
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <button onClick={openAddWindow} className="bg-blue-950 text-zinc-100 active:bg-blue-950 text-xs font-bold px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Add product</button>
                                </div>
                            </div>
                        </div>

                        <div className="block w-full overflow-x-auto">
                            <table className="items-center bg-transparent w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-6  text-blue-950 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Image</th>
                                        <th className="px-6  text-blue-950 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Product name</th>
                                        <th className="px-6   text-blue-950 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Description</th>
                                        <th className="px-6   text-blue-950 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">---</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                    
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4">
                                            <img className="w-20 h-20" src={pipes}/>
                                        </th>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">Pipes</th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                        <td>
                                            <button onClick={openEditWindow} className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs underline whitespace-nowrap p-4">Edit</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4">
                                            <img className="w-20 h-20" src={chairs}/>
                                            </th>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">Chairs</th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                        <td>
                                            <button onClick={openEditWindow} className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs underline whitespace-nowrap p-4">Edit</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4">
                                            <img className="w-20 h-20" src={gallon}/>
                                        </th>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">Water Gallon</th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                        <td>
                                            <button onClick={openEditWindow} className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs underline whitespace-nowrap p-4">Edit</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4">
                                            <img className="w-20 h-20" src={basin}/>
                                        </th>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">Basins</th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                        <td>
                                            <button onClick={openEditWindow} className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs underline whitespace-nowrap p-4">Edit</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4">
                                            <img className="w-20 h-20" src={clips}/>
                                        </th>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">Laundry Clips</th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                        <td>
                                            <button onClick={openEditWindow} className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs underline whitespace-nowrap p-4">Edit</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4">
                                            <img className="w-20 h-20" src={bottle}/>
                                        </th>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">Recyclable Bottles</th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                        <td>
                                            <button onClick={openEditWindow} className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs underline whitespace-nowrap p-4">Edit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {isAddModalOpen() && (
                                                <div class="fixed top-0 left-0 w-full h-full px-4 flex justify-center items-center">
                                                    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"/>
        
                                                    <div class="absolute bg-gray-100 rounded-lg p-8 shadow-lg">
                                                        <div class="modal-content flex justify-center items-center bg-zinc-100">
                                                            <form action="#" class="w-full">
                                                                <div class="grid gap-4 mb-4 sm:grid-cols-2">
                                                                    <h3 class="text-lg font-semibold text-gray-900">
                                                                        Add product
                                                                    </h3>
                                                                    <button type="button" onClick={closeAddWindow} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="defaultModal">
                                                                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                                        <span class="sr-only">Close modal</span>
                                                                    </button>
                                                                    <div className="sm:col-span-2 -mt-7">
                                                                        <div class="relative w-48 h-48 mt-8 overflow-hidden bg-zinc-100 border border-gray-300 rounded-t-lg"></div>
                                                                        <label class="text-blue-950 inline-flex border border-gray-300 justify-center items-center bg-gray-200 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-b-lg text-sm w-48 py-2.5 text-center" for="user_avatar">Upload picture
                                                                        </label>
                                                                        <input class="hidden" id="user_avatar" type="file"/>
                                                                    </div>
                                                                    <div>
                                                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Product Name</label>
                                                                        <input type="text" name="firstname" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type product name" required=""/>
                                                                    </div>
                                                                    <div>
                                                                        <label for="brand" class="block mb-2 text-sm font-medium text-gray-900   ">Quantity</label>
                                                                        <input type="text" name="lastname" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type quantity" required=""/>
                                                                    </div>
                                                                    <div>
                                                                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900">Variations</label>
                                                                        <input type="text" name="employeeid" id="employee_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Type product variants" required=""/>
                                                                    </div>
                                                                    <div className="sm:col-span-2">
                                                                        <label for="description" className="block mb-2 text-md font-medium text-blue-950">Description</label>
                                                                        <textarea id="description" rows="6" className="block p-2.5 w-full text-sm text-blue-950 bg-grey-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Your description here"></textarea>
                                                                    </div>
                                                                    
                                                                </div>
                                                                <div>
                                                                    <button type="submit" class="text-zinc-100 inline-flex items-center bg-gray-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm  py-2.5 mt-2 justify-center w-full">
                                                                        Add product
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {isEditModalOpen() && (
                                                <div class="fixed top-0 left-0 w-full h-full px-4 flex justify-center items-center">
                                                    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"/>
        
                                                    <div class="absolute bg-gray-100 rounded-lg p-8 shadow-lg">
                                                        <div class="modal-content flex justify-center items-center bg-zinc-100">
                                                            <form action="#" class="w-full">
                                                                <div class="grid gap-4 mb-4 sm:grid-cols-2">
                                                                    <h3 class="text-lg font-semibold text-gray-900">
                                                                        Edit product
                                                                    </h3>
                                                                    <button type="button" onClick={closeEditWindow} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="defaultModal">
                                                                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                                        <span class="sr-only">Close modal</span>
                                                                    </button>
                                                                    <div className="sm:col-span-2 -mt-7">
                                                                        <div class="relative w-48 h-48 mt-8 overflow-hidden bg-zinc-100 border border-gray-300 rounded-t-lg"></div>
                                                                        <label class="text-blue-950 inline-flex border border-gray-300 justify-center items-center bg-gray-200 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-b-lg text-sm w-48 py-2.5 text-center" for="user_avatar">Upload picture
                                                                        </label>
                                                                        <input class="hidden" id="user_avatar" type="file"/>
                                                                    </div>
                                                                    <div>
                                                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Product Name</label>
                                                                        <input type="text" name="firstname" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type product name" required=""/>
                                                                    </div>
                                                                    <div>
                                                                        <label for="brand" class="block mb-2 text-sm font-medium text-gray-900   ">Quantity</label>
                                                                        <input type="text" name="lastname" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type quantity" required=""/>
                                                                    </div>
                                                                    <div>
                                                                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900">Variations</label>
                                                                        <input type="text" name="employeeid" id="employee_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Type product variants" required=""/>
                                                                    </div>
                                                                    <div className="sm:col-span-2">
                                                                        <label for="description" className="block mb-2 text-md font-medium text-blue-950">Description</label>
                                                                        <textarea id="description" rows="6" className="block p-2.5 w-full text-sm text-blue-950 bg-grey-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Your description here"></textarea>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <button type="submit" class="text-zinc-100 inline-flex items-center bg-gray-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm  py-2.5 mt-2 justify-center w-full">
                                                                        Confirm changes
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                        </div>
                    </div>
                </div>
            </section>

        </div>
        
    );
}