import { createSignal } from "solid-js";
import pipes from "../assets/Pipes_King8.png";
import AdminHeader from "../components/AdminHeader";

export default function AdminProducts() {
  const [isEditModalOpen, setIsEditModalOpen] = createSignal(false);
  const [isAddModalOpen, setIsAddModalOpen] = createSignal(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = createSignal(false);
  const [isConfirmEditOpen, setIsConfirmEditOpen] = createSignal(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = createSignal(false);

  const [addFormData, setAddFormData] = createSignal({
    product_name: "",
    quantity: "",
    variations: "",
    description: "",
  });

  const [updateForm, setUpdateForm] = createSignal({
    product_name: "",
    quantity: "",
    variations: "",
    description: "",
  });

  const openEditWindow = () => setIsEditModalOpen(true);
  const closeEditWindow = () => setIsEditModalOpen(false);
  const openConfirmAddWindow = () => setIsConfirmModalOpen(true);
  const closeConfirmAddWindow = () => setIsConfirmModalOpen(false);
  const openAddWindow = () => setIsAddModalOpen(true);
  const closeAddWindow = () => setIsAddModalOpen(false);
  const openConfirmEdit = () => setIsConfirmEditOpen(true);
  const closeConfirmEdit = () => setIsConfirmEditOpen(false);
  const openConfirmDelete = () => setIsConfirmDeleteOpen(true);
  const closeConfirmDelete = () => setIsConfirmDeleteOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = (e) => {
    e.preventDefault();
    const { product_name, quantity, variations, description } = addFormData();
    if (!product_name && !quantity && !variations && !description) {
      openConfirmAddWindow();
    } else {
      alert("Fill in missing blanks.");
    }
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const { product_name, quantity, variations, description } = updateForm();
    if (!product_name && !quantity && !variations && !description) {
      openConfirmEdit();
    } else {
      alert("Fill in missing blanks");
    }
  };

  return (
    <div className="relative bg-zinc-100 w-full h-full sm:w-full sm:h-screen">
      <AdminHeader />

      <section className="py-1 bg-zinc-100">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-12">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-extrabold text-base text-blue-950">
                    Product Editor
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <button
                    onClick={openAddWindow}
                    className="bg-blue-950 text-zinc-100 active:bg-blue-950 text-xs font-bold px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Add product
                  </button>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse">
                <thead>
                  <tr>
                    <th className="px-6  text-blue-950 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Image
                    </th>
                    <th className="px-6  text-blue-950 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Product name
                    </th>
                    <th className="px-6   text-blue-950 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Description
                    </th>
                    <th className="px-6   text-blue-950 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      ---
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4">
                      <img className="w-20 h-20" src={pipes} />
                    </th>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                      Pipes
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </td>
                    <td>
                      <button
                        onClick={openEditWindow}
                        className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs underline whitespace-nowrap p-4"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              {isAddModalOpen() && (
                <div class="fixed top-0 left-0 w-full sm:h-full h-full px-4 flex justify-center items-center">
                  <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" />

                  <div class="absolute bg-gray-100 rounded-lg p-8 shadow-lg">
                    <div class="modal-content flex justify-center items-center bg-zinc-100">
                      <form action="#" class="w-full" onSubmit={handleSend}>
                        <div class="grid gap-4 mb-4 sm:grid-cols-2">
                          <h3 class="text-lg font-semibold text-gray-900">
                            Add product
                          </h3>
                          <button
                            type="button"
                            onClick={closeAddWindow}
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            data-modal-toggle="defaultModal"
                          >
                            <svg
                              aria-hidden="true"
                              class="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                          </button>
                          <div className="-mt-6">
                            <div class="relative w-48 h-48 mt-8 overflow-hidden bg-zinc-100 border border-gray-300 rounded-t-lg"></div>
                            <label
                              class="text-blue-950 inline-flex border border-gray-300 justify-center items-center bg-gray-200 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-b-lg text-sm w-48 py-2.5 text-center"
                              for="user_avatar"
                            >
                              Upload picture
                            </label>
                            <input
                              class="hidden"
                              id="user_avatar"
                              type="file"
                            />
                          </div>
                          <div>
                            <label
                              for="name"
                              class="block mb-2 text-sm font-medium text-gray-900 "
                            >
                              Product Name
                            </label>
                            <input
                              type="text"
                              name="firstname"
                              id="product_name"
                              value={addFormData().product_name}
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                              placeholder="Type product name"
                              required=""
                            />
                            <div className="mt-4">
                              <label
                                for="brand"
                                class="block mb-2 text-sm font-medium text-gray-900   "
                              >
                                Quantity
                              </label>
                              <input
                                type="text"
                                name="lastname"
                                id="quantity"
                                value={addFormData().quantity}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Type quantity"
                                required=""
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                for="price"
                                class="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Variations
                              </label>
                              <input
                                type="text"
                                name="employeeid"
                                id="variations"
                                value={addFormData().variations}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                placeholder="Type product variants"
                                required=""
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <label
                              for="description"
                              className="block mb-2 text-md font-medium text-blue-950"
                            >
                              Description
                            </label>
                            <textarea
                              id="description"
                              value={addFormData().description}
                              rows="6"
                              className="block p-2.5 w-full text-sm text-blue-950 bg-grey-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                              placeholder="Your description here"
                              required=""
                            ></textarea>
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            class="text-zinc-100 inline-flex items-center bg-gray-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm  py-2.5 mt-2 justify-center w-full"
                          >
                            Add product
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
              {isEditModalOpen() && (
                <div class="lg:fixed md:fixed top-0 left-0 w-full h-full px-4 flex justify-center items-center">
                  <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" />

                  <div class="absolute bg-gray-100 rounded-lg p-8 shadow-lg max-w-lg w-full">
                    <div class="modal-content flex justify-center items-center bg-zinc-100">
                      <form action="#" class="w-full" onSubmit={handleUpdate}>
                        <div class="grid gap-4 mb-4 md:grid-cols-2 sm:grid-cols-2">
                          <h3 class="text-lg font-semibold text-gray-900">
                            Edit product
                          </h3>
                          <button
                            type="button"
                            onClick={closeEditWindow}
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            data-modal-toggle="defaultModal"
                          >
                            <svg
                              aria-hidden="true"
                              class="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                          </button>
                          <div className="-mt-6">
                            <div class="relative w-48 h-48 mt-8 overflow-hidden bg-zinc-100 border border-gray-300 rounded-t-lg"></div>
                            <label
                              class="text-blue-950 inline-flex border border-gray-300 justify-center items-center bg-gray-200 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-b-lg text-sm w-48 py-2.5 text-center"
                              for="user_avatar"
                            >
                              Upload picture
                            </label>
                            <input
                              class="hidden"
                              id="user_avatar"
                              type="file"
                            />
                          </div>
                          <div>
                            <label
                              for="name"
                              class="block mb-2 text-sm font-medium text-gray-900 "
                            >
                              Product Name
                            </label>
                            <input
                              type="text"
                              name="firstname"
                              id="first_name"
                              value={updateForm().product_name}
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                              placeholder="Type product name"
                              required=""
                            />
                            <div className="mt-4">
                              <label
                                for="brand"
                                class="block mb-2 text-sm font-medium text-gray-900   "
                              >
                                Quantity
                              </label>
                              <input
                                type="text"
                                name="lastname"
                                id="last_name"
                                value={updateForm().quantity}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Type quantity"
                                required=""
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                for="price"
                                class="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Variations
                              </label>
                              <input
                                type="text"
                                name="employeeid"
                                id="employee_id"
                                value={updateForm().variations}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                placeholder="Type product variants"
                                required=""
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <label
                              for="description"
                              className="block mb-2 text-md font-medium text-blue-950"
                            >
                              Description
                            </label>
                            <textarea
                              id="description"
                              rows="6"
                              value={updateForm().description}
                              className="block p-2.5 w-full text-sm text-blue-950 bg-grey-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                              placeholder="Your description here"
                            ></textarea>
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            class="text-zinc-100 inline-flex  items-center bg-gray-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm  px-4 py-2.5 justify-center"
                          >
                            Confirm changes
                          </button>
                          <button
                            onClick={openConfirmDelete}
                            class="text-zinc-100 items-center bg-red-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 ml-4 justify-center"
                          >
                            Delete product
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
              {isConfirmModalOpen() && (
                <div className="fixed top-0 left-0 w-full h-full px-4 flex justify-center items-center">
                  <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" />

                  <div className="absolute h-40 w-96 shadow-lg p-4 mb-4 text-gray-800 border border-gray-300 rounded-lg bg-gray-50">
                    <div class="flex items-center">
                      <svg
                        class="flex-shrink-0 w-4 h-4 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                      </svg>
                      <span class="sr-only">Info</span>
                      <h3 class="text-lg font-medium">Confirm</h3>
                    </div>
                    <div class="mt-2 mb-4 text-sm">
                      Do you wish to continue adding this product?
                    </div>
                    <div class="flex">
                      <button
                        onClick={() => {
                          closeConfirmAddWindow();
                          closeAddWindow();
                        }}
                        type="button"
                        class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center"
                      >
                        Create
                      </button>
                      <button
                        onClick={closeConfirmAddWindow}
                        type="button"
                        class="text-gray-800 bg-transparent border border-gray-800 hover:bg-gray-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center"
                        data-dismiss-target="#alert-additional-content-2"
                        aria-label="Close"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {isConfirmEditOpen() && (
                <div className="fixed top-0 left-0 w-full h-full px-4 flex justify-center items-center">
                  <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" />

                  <div className="absolute h-40 w-96 shadow-lg p-4 mb-4 text-gray-800 border border-gray-300 rounded-lg bg-gray-50">
                    <div class="flex items-center">
                      <svg
                        class="flex-shrink-0 w-4 h-4 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                      </svg>
                      <span class="sr-only">Info</span>
                      <h3 class="text-lg font-medium">Confirm changes?</h3>
                    </div>
                    <div class="mt-2 mb-4 text-sm">
                      Do you wish to continue revising your changes?
                    </div>
                    <div class="flex">
                      <button
                        onClick={closeConfirmEdit}
                        type="button"
                        class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center"
                      >
                        Yes, Continue
                      </button>
                      <button
                        onClick={closeConfirmEdit}
                        type="button"
                        class="text-gray-800 bg-transparent border border-gray-800 hover:bg-gray-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center"
                        data-dismiss-target="#alert-additional-content-2"
                        aria-label="Close"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {isConfirmDeleteOpen() && (
                <div className="fixed top-0 left-0 w-full h-full px-4 flex justify-center items-center">
                  <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" />

                  <div className="absolute h-40 w-96 shadow-lg p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50">
                    <div class="flex items-center">
                      <svg
                        class="flex-shrink-0 w-4 h-4 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                      </svg>
                      <span class="sr-only">Info</span>
                      <h3 class="text-lg font-medium">Confirm changes?</h3>
                    </div>
                    <div class="mt-2 mb-4 text-sm">
                      Do you wish to continue revising your changes?
                    </div>
                    <div class="flex">
                      <button
                        onClick={() => {
                          closeConfirmDelete();
                          closeEditWindow();
                        }}
                        type="button"
                        class="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center"
                      >
                        Yes, Continue
                      </button>
                      <button
                        onClick={closeConfirmDelete}
                        type="button"
                        class="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center"
                        data-dismiss-target="#alert-additional-content-2"
                        aria-label="Close"
                      >
                        Cancel
                      </button>
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
