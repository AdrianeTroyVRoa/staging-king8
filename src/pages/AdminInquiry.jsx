import { createEffect, createResource, createSignal, onMount } from "solid-js";
import AdminHeader from "../components/AdminHeader";

export default function AdminInquiry() {
  const [pendingInquiries, setPendingInquiries] = createSignal([]);
  const [resolvedInquiries, setResolvedInquiries] = createSignal([]);
  const [archivedInquiries, setArchivedInquiries] = createSignal([]);

  const addPending = (newPending) => {
    setPendingInquiries((prevPendings) => [...prevPendings, newPending])
  }

  const addResolved = (newResolved) => {
    setPendingInquiries((prevResolved) => [...prevResolved, newResolved])
  }

  const addArchived = (newArchived) => {
    setPendingInquiries((prevArchived) => [...prevArchived, newArchived])
  }

  const fetchQueries = async () => {
    try {
      const response = await fetch("http://localhost:5000/get-inquiries");
      if (!response.ok) {
        throw new Error("Failed to fetch inquiries");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    }
  };

  onMount(() => {
    fetchQueries().then((result) => {
      for (let i = 0; i < result.length; i++) {
        if (result[i].status == "PENDING") {
          addPending(result[i]);
        } else if (result[i].status == "RESOLVED") {
          addResolved(result[i]);
        } else {
          addArchived(result[i]);
        }
      }
    });
  });

  const [isDeleteButtonClicked, setIsDeleteButtonClicked] = createSignal(false);
  const [isResolveButtonClicked, setIsResolveButtonClicked] =
    createSignal(false);
  const [isArchiveButtonClicked, setIsArchiveButtonClicked] =
    createSignal(false);

  const [selectedCheckboxes] = createSignal(new Set());
  const [activePendingView, setActivePendingView] = createSignal(true);
  const [activeResolvedView, setActiveResolvedView] = createSignal(false);
  const [activeArchivedView, setActiveArchivedView] = createSignal(false);

  const openDeleteWindow = () => setIsDeleteButtonClicked(true);
  const closeDeleteWindow = () => setIsDeleteButtonClicked(false);

  const openResolveWindow = () => setIsResolveButtonClicked(true);
  const closeResolveWindow = () => setIsResolveButtonClicked(false);

  const openArchiveWindow = () => setIsArchiveButtonClicked(true);
  const closeArchiveWindow = () => setIsArchiveButtonClicked(false);

  createEffect(() => {
    const buttonVisibiltyPending = () => {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      const button = document.getElementById("resolve_button");
      const text_one = document.getElementById("pending_text");
      const text_two = document.getElementById("resolve_text");
      const text_three = document.getElementById("archive_text");
      const anyChecked = Array.from(checkboxes).some(
        (checkbox) => checkbox.checked,
      );
      if (anyChecked) {
        button.classList.remove("hidden");
        text_one.classList.add("hidden");
        text_two.classList.add("hidden");
        text_three.classList.add("hidden");
      } else {
        button.classList.add("hidden");
        text_one.classList.remove("hidden");
        text_two.classList.remove("hidden");
        text_three.classList.remove("hidden");
      }
    };

    const buttonVisibiltyResolved = () => {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      const button = document.getElementById("delete_button");
      const button_two = document.getElementById("archive_button");
      const text_one = document.getElementById("pending_text");
      const text_two = document.getElementById("resolve_text");
      const text_three = document.getElementById("archive_text");
      const anyChecked = Array.from(checkboxes).some(
        (checkbox) => checkbox.checked,
      );
      if (anyChecked) {
        button.classList.remove("hidden");
        button_two.classList.remove("hidden");
        text_one.classList.add("hidden");
        text_two.classList.add("hidden");
        text_three.classList.add("hidden");
      } else {
        button.classList.add("hidden");
        button_two.classList.add("hidden");
        text_one.classList.remove("hidden");
        text_two.classList.remove("hidden");
        text_three.classList.remove("hidden");
      }
    };

    const buttonVisibiltyArchived = () => {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      const button = document.getElementById("delete_button");

      const text_one = document.getElementById("pending_text");
      const text_two = document.getElementById("resolve_text");
      const text_three = document.getElementById("archive_text");
      const anyChecked = Array.from(checkboxes).some(
        (checkbox) => checkbox.checked,
      );
      if (anyChecked) {
        button.classList.remove("hidden");
        text_one.classList.add("hidden");
        text_two.classList.add("hidden");
        text_three.classList.add("hidden");
      } else {
        button.classList.add("hidden");
        text_one.classList.remove("hidden");
        text_two.classList.remove("hidden");
        text_three.classList.remove("hidden");
      }
    };

    const addCheckboxListeners = (select, visibility) => {
      const checkboxes = document.querySelectorAll(select);
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
          selectedCheckboxes((prev) => {
            const update = new Set(prev);
            if (checkbox.checked) {
              update.add(checkbox.id);
            } else {
              update.delete(checkbox.id);
            }
            return update;
          });
          visibility();
        });
      });
    };

    createEffect(() => {
      if (activePendingView()) {
        addCheckboxListeners(
          '.pending input[type="checkbox"]',
          buttonVisibiltyPending,
        );
        buttonVisibiltyPending();
      } else if (activeResolvedView()) {
        addCheckboxListeners(
          '.resolved input[type="checkbox"]',
          buttonVisibiltyResolved,
        );
        buttonVisibiltyResolved();
      } else if (activeArchivedView()) {
        addCheckboxListeners(
          '.archived input[type="checkbox"]',
          buttonVisibiltyArchived,
        );
        buttonVisibiltyArchived();
      }
    });
  });

  console.log("Auf Wedersehen");
  console.log();
  const renderInquiry = (inquiries, categoryClass) => {
    return inquiries.map((inquiry) => (
      <tr class={`hover:bg-gray-100 ${categoryClass}`} key={inquiry.id}>
        <th>
          <div class="flex items-center justify-center">
            <input
              id={`check_${inquiry.id}`}
              type="checkbox"
              checked={selectedCheckboxes().has(`check_${inquiry.id}`)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>
        </th>
        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs underline whitespace-nowrap p-4 text-center text-blueGray-700">
          {inquiry.subject}
        </th>
        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center text-blueGray-700">
          {inquiry.additional_msg}
        </td>
        <td class="border-t-0 align-middle border-l-0 border-r-0 whitespace-nowrap text-center">
          <div
            class={`text-zinc-100 ${inquiry.status === "Pending" ? "bg-amber-600" : inquiry.status === "Resolved" ? "bg-green-700" : "bg-gray-700"} font-medium rounded-full text-xs p-1`}
          >
            {inquiry.status}
          </div>
        </td>
        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center text-blueGray-700">
          {inquiry.createdAt}
        </td>
      </tr>
    ));
  };

  return (
    <div className="relative bg-zinc-100 w-full h-full sm:w-full sm:h-screen">
      <AdminHeader />
      <section class="py-1 bg-zinc-100">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-12">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div class="rounded-t mb-0 px-4 py-3 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-extrabold text-base text-blue-950">
                    Inquiry List
                  </h3>
                </div>
                <button
                  onClick={openResolveWindow}
                  id="resolve_button"
                  class="hidden text-zinc-100 bg-green-700 font-bold rounded-full text-xs w-20 p-2 mx-2 text-center"
                >
                  Resolve
                </button>
                <button
                  onClick={openArchiveWindow}
                  id="archive_button"
                  class="hidden text-zinc-100 bg-gray-700 font-bold rounded-full text-xs w-20 p-2 mx-2 text-center"
                >
                  Archive
                </button>
                <button
                  onClick={openDeleteWindow}
                  id="delete_button"
                  class="hidden text-zinc-100 bg-red-700 font-bold rounded-full text-xs w-20 p-2 mx-2 text-center"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setActivePendingView(true);
                    setActiveResolvedView(false);
                    setActiveArchivedView(false);
                  }}
                  id="pending_text"
                  className="align-middle font-bold uppercase text-xs text-blue-950 p-2 "
                >
                  Pending
                </button>
                <button
                  onClick={() => {
                    setActivePendingView(false);
                    setActiveResolvedView(true);
                    setActiveArchivedView(false);
                  }}
                  id="resolve_text"
                  className="align-middle font-bold uppercase text-xs text-blue-950 p-2"
                >
                  Resolved
                </button>
                <button
                  onClick={() => {
                    setActivePendingView(false);
                    setActiveResolvedView(false);
                    setActiveArchivedView(true);
                  }}
                  id="archive_text"
                  className=" align-middle font-bold uppercase text-xs text-blue-950 p-2"
                >
                  Archived
                </button>
              </div>
            </div>

            <div class="block w-full overflow-x-auto">
              <table class="items-center bg-transparent w-full border-collapse">
                <thead>
                  <tr>
                    <th class="text-blue-950 align-middle border border-solid border-blueGray-100 px-4 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                      Filter
                    </th>
                    <th class="text-blue-950 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                      Subject
                    </th>
                    <th class="text-blue-950 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                      Message
                    </th>
                    <th class="text-blue-950 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                      Status
                    </th>
                    <th class="text-blue-950 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                      Date/Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {activePendingView() &&
                    renderInquiry(pendingInquiries(), "pending")}
                  {activeResolvedView() &&
                    renderInquiry(resolvedInquiries(), "resolved")}
                  {activeArchivedView() &&
                    renderInquiry(archivedInquiries(), "archived")}
                </tbody>
              </table>

              {isArchiveButtonClicked() && (
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
                      <h3 class="text-lg font-medium">Confirm changes!</h3>
                    </div>
                    <div class="mt-2 mb-4 text-sm">
                      Confirming your changes will put this inquiry to
                      "Archived". Continue?
                    </div>
                    <div class="flex">
                      <button
                        type="button"
                        class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center"
                      >
                        Yes, Confirm
                      </button>
                      <button
                        onClick={closeArchiveWindow}
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

              {isResolveButtonClicked() && (
                <div className="fixed top-0 left-0 w-full h-full px-4 flex justify-center items-center">
                  <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" />

                  <div className="absolute h-40 w-96 shadow-lg p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50">
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
                      <h3 class="text-lg font-medium">Confirm changes!</h3>
                    </div>
                    <div class="mt-2 mb-4 text-sm">
                      Confirming your changes will put this inquiry to
                      "Resolved". Continue?
                    </div>
                    <div class="flex">
                      <button
                        type="button"
                        class="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center"
                      >
                        Yes, Confirm
                      </button>
                      <button
                        onClick={closeResolveWindow}
                        type="button"
                        class="text-green-800 bg-transparent border border-green-800 hover:bg-green-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center"
                        data-dismiss-target="#alert-additional-content-2"
                        aria-label="Close"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {isDeleteButtonClicked() && (
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
                      <h3 class="text-lg font-medium">Warning!</h3>
                    </div>
                    <div class="mt-2 mb-4 text-sm">
                      Are you sure you want to delete? This action cannot be
                      undone.
                    </div>
                    <div class="flex">
                      <button
                        type="button"
                        class="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center"
                      >
                        Yes, Delete
                      </button>
                      <button
                        onClick={closeDeleteWindow}
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
