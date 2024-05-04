import basin from "../../assets/Basin_King8.png";
import bottle from "../../assets/Bottle_King8.png";
import chairs from "../../assets/Chairs_King8.png";
import clips from "../../assets/Clip_King8.png";
import gallon from "../../assets/Gallon_King8.png";
import pipes from "../../assets/Pipes_King8.png";
import AdminHeader from "../../components/AdminHeader";

export default function AdminProducts (){
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
                                    <button className="bg-blue-950 text-zinc-100 active:bg-blue-950 text-xs font-bold px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Add product</button>
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
                                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs underline whitespace-nowrap p-4">Edit</td>
                                    </tr>
                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4">
                                            <img className="w-20 h-20" src={chairs}/>
                                            </th>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">Chairs</th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs underline whitespace-nowrap p-4">Edit</td>
                                    </tr>
                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4">
                                            <img className="w-20 h-20" src={gallon}/>
                                        </th>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">Water Gallon</th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs underline whitespace-nowrap p-4">Edit</td>
                                    </tr>
                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4">
                                            <img className="w-20 h-20" src={basin}/>
                                        </th>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">Basins</th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs underline whitespace-nowrap p-4">Edit</td>
                                    </tr>
                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4">
                                            <img className="w-20 h-20" src={clips}/>
                                        </th>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">Laundry Clips</th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs underline whitespace-nowrap p-4">Edit</td>
                                    </tr>
                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4">
                                            <img className="w-20 h-20" src={bottle}/>
                                        </th>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">Recyclable Bottles</th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs underline whitespace-nowrap p-4">Edit</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

        </div>
        
    );
}