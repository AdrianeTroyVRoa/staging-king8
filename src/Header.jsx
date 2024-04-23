import king8 from "./assets/king8-logo.png";

function Header() {
  const menuItems = ["HOME", "PRODUCTS", "ABOUT US", "CONTACT US"];

  return (
    <nav className="bg-dark-100 px-4 lg:px-6 py-2.5">
      <div className="flex flex-wrap text-blue-950 justify-between items-center mx-auto max-w-screen-xl">
        <a href="#" className="flex items-center">
          <img
            src={king8}
            className="h-20"
            alt="Mindanao King8 Plastics Logo"
          />
        </a>
        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a className="block py-2 pr-4 pl-3 font-bold">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
          <div className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <a className="font-bold bg-amber-400 text-light py-3 px-4 rounded-lg">SIGN UP</a>
            <a className="font-bold border-solid border-2 border-blue-950 text-light py-3 px-4 rounded-lg">LOG IN</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
