import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

function Foot() {
  return (
    <div className="bg-[rgb(239,239,239)]">
      <div className="container mx-auto bg-[rgb(239,239,239)] border-0">
        <Footer container className="!mb-0 bg-[rgb(239,239,239)] border-0">
          <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div className="flex flex-nowrap">
                <img
                  src="/logo2.png"
                  className="w-[60%] h-[60%] flex mt-20"
                ></img>
                <div className="ml-20"></div>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 min-w-[1000px] flex-nowrap">
                <div className="max-w-[200px]">
                  <Footer.Title
                    className=" text-xl text-orange-600 border-b-orange-600 border-b-[2px] p-1 rounded-sm font-rexbold"
                    title="ჩვენ შესახებ"
                  />
                  <Footer.LinkGroup col>
                    <Footer.Link href="/about" className="font-glaho">
                      მისია
                    </Footer.Link>
                    <Footer.Link href="/about" className="font-glaho">
                      რატომ კომაროვი?
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div className="max-w-[200px]">
                  <Footer.Title
                    title="კონტაქტი"
                    className=" text-xl text-blue-600 border-b-blue-600 border-b-[2px] p-1 rounded-sm font-rexbold"
                  />
                  <Footer.LinkGroup col>
                    <Footer.Link href="/" className="font-glaho">
                      589386865
                    </Footer.Link>
                    <Footer.Link
                      href="https://www.facebook.com/komarovi199"
                      className="font-glaho"
                    >
                      Facebook
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div className="max-w-[200px]">
                  <Footer.Title
                    title="მეტი"
                    className=" text-xl text-purple-600 border-b-purple-600 border-b-[2px] p-1 rounded-sm font-rexbold"
                  />
                  <Footer.LinkGroup col>
                    <Footer.Link href="/exam" className="font-glaho">
                      წესრიგი
                    </Footer.Link>
                    <Footer.Link href="/exam" className="font-glaho">
                      მიღება
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div className="max-w-[200px]">
                  <Footer.Title
                    title="საშაბათო სკოლა"
                    className=" text-xl text-green-600 border-b-green-600 border-b-[2px] p-1 rounded-sm font-rexbold"
                  />
                  <Footer.LinkGroup col>
                    <Footer.Link href="/" className="font-glaho">
                      საშაბათო სკოლა
                    </Footer.Link>
                    <Footer.Link href="/" className="font-glaho">
                      საღამოს სკოლა
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div className="max-w-[200px]">
                  <Footer.Title
                    title="საღამოს სკოლა"
                    className=" text-xl text-yellow-400 border-b-yellow-400 border-b-[2px] p-1 rounded-sm font-rexbold"
                  />
                  <Footer.LinkGroup col>
                    <Footer.Link href="/" className="font-glaho">
                      საშაბათო სკოლა
                    </Footer.Link>
                    <Footer.Link href="/" className="font-glaho">
                      საღამოს სკოლა
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div className="max-w-[200px]">
                  <Footer.Title
                    title="ოლიმპიადები"
                    className=" text-xl text-gray-600 border-b-gray-600 border-b-[2px] p-1 rounded-sm font-rexbold"
                  />
                  <Footer.LinkGroup col>
                    <Footer.Link href="/" className="font-glaho">
                      რაღაცა
                    </Footer.Link>
                    <Footer.Link href="/" className="font-glaho">
                      რაღაცა
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
            </div>
            <Footer.Divider />
            <div className=" flex justify-center">
              <div className="w-2/5 sm:flex sm:items-center sm:justify-between p-1 rounded-sm">
                <Footer.Copyright href="#" by="Komarovi" year={2024} />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                  <Footer.Icon
                    href="https://www.facebook.com/komarovi199"
                    className=" fill-white"
                    icon={BsFacebook}
                  />
                  <Footer.Icon
                    href="https://www.facebook.com/komarovi199"
                    className=" fill-white"
                    icon={BsInstagram}
                  />
                </div>
              </div>
            </div>
          </div>
        </Footer>
      </div>
    </div>
  );
}
export default Foot;
