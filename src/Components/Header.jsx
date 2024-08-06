import { Navbar } from "flowbite-react";
import Switcher from "./Switch";
import Dropdown from "./Dropdown";

function Header() {
  return (
    <div className="shadow-2xl animate-beka">
      <div className="container mx-auto">
        <Navbar fluid rounded>
          <Navbar.Brand href="/">
            <img
              src="/capture.png"
              className="mr-3 h-12 sm:h-16"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-4xl font-rexbold dark:text-white">
              Komarovi
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className=" font-rexbold">
            <Navbar.Link
              className="text-center justify-center group relative items-center flex w-full h-full text-xl mr-10 flex-wrap"
              href="/"
              active
            >
              მთავარი
              <div className="h-[3px] w-0 absolute transition-all duration-300 bottom-0 left-0 right-0 group-hover:w-full rounded-lg bg-blue-500 line"></div>
            </Navbar.Link>
            <Navbar.Link
              className="text-center justify-center group relative items-center flex w-full h-full text-xl mr-10 flex-wrap"
              href="/about"
            >
              ჩვენ შესახებ
              <div className="h-[3px] w-0 absolute transition-all duration-300 bottom-0 left-0 right-0 group-hover:w-full rounded-lg bg-blue-500 line"></div>
            </Navbar.Link>
            <Navbar.Link
              className="text-center justify-center group relative items-center flex w-full h-full text-xl mr-10 flex-wrap"
              href="/exam"
            >
              მიღება
              <div className="h-[3px] w-0 absolute transition-all duration-300 bottom-0 left-0 right-0 group-hover:w-full rounded-lg bg-blue-500 line"></div>
            </Navbar.Link>
            <Navbar.Link
              className="text-center justify-center group relative items-center flex w-full h-full text-xl mr-10 flex-wrap"
              href="/news"
            >
              სიახლეები
              <div className="h-[3px] w-0 absolute transition-all duration-300 bottom-0 left-0 right-0 group-hover:w-full rounded-lg bg-blue-500 line"></div>
            </Navbar.Link>
            <Dropdown />
            <Switcher />
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
export default Header;
