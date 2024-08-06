import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";
function Main() {
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-[40dvh] relative">
        <Carousel>
          <img src="/image.jpg" alt="..." />
          <img src="/image2.png" alt="..." />
          <img src="/image3.jpg" alt="..." />
        </Carousel>
        <div className=" absolute bottom-[-80px] right-[65.5%] bg-[rgb(79,147,255)] flex justify-between rounded-lg border-[4px] border-[rgb(101,161,255)] hover:border-[rgb(0,206,137)] hover:bg-[rgb(0,183,121)] transition-all duration-500 hover:scale-110 animate-avto">
          <a
            href="/"
            className=" p-6 text-white w-full h-full flex text-2xl font-rexbold"
          >
            STEM სკოლა
            <img src="/icon1.png" className="flex ml-[160px]"></img>
          </a>
        </div>
        <div className=" animate-avto absolute bottom-[-80px] right-[39%] bg-[rgb(79,147,255)] flex justify-between rounded-lg border-[4px] border-[rgb(101,161,255)] hover:border-[rgb(137,0,206)] hover:bg-[rgb(116,0,183)] transition-all duration-500 hover:scale-110">
          <a
            href="/"
            className=" p-6 text-white w-full h-full flex text-2xl font-rexbold"
          >
            საშაბათო სკოლა
            <img src="/icon2.png" className="flex ml-[160px]"></img>
          </a>
        </div>
        <div className=" animate-avto absolute bottom-[-80px] right-[13%] bg-[rgb(79,147,255)] flex justify-between rounded-lg border-[4px] border-[rgb(101,161,255)] hover:border-[rgb(206,58,0)] hover:bg-[rgb(183,52,0)] transition-all duration-500 hover:scale-110">
          <a
            href="/"
            className=" p-6 text-white w-full h-full flex text-2xl font-rexbold"
          >
            საღამოს სკოლა
            <img src="/icon3.png" className="flex ml-[160px]"></img>
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-24 flex justify-between">
        <Card href="#" className="max-w-sm shadow-lg animate-avto">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-rexbold">
            რატომ კომაროვი?
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 font-glaho">
            არანაირი მიზეზი არ არსებობს კომაროვში რომ იარო ვეკუა უკეთესია
          </p>
          <a href="" className="text-blue-500 underline">
            {" "}
            მისია
          </a>
          <a href="" className="text-blue-500 underline">
            ბლოგები
          </a>
          <a href="" className="text-blue-500 underline">
            მიღება
          </a>
        </Card>
        <div className=" animate-avto w-[800px] p-10 border-opacity-10 border-black border-[0.5px] rounded-md border-b-0 rounded-br-none rounded-bl-none">
          <a className="font-rexbold text-blue-500 underline w-full" href="/">
            სიახლეების არქივი
          </a>
          <h2 className=" font-rexbold text-xl mt-5 mb-5">
            კომაროვის სკოლის მე-9, მე-10 და მე-11 კლასებში მისაღები გამოცდის
            საბოლოო შედეგები{" "}
          </h2>
          <div className="flex justify-between">
            <img
              src="/capture2.png"
              className=" max-w-[60%] max-h-[120px] rounded-md"
            ></img>
            <div className=" flex flex-wrap font-glaho text-sm">
              მე-9, მე-10 და მე-11 კლასებში მისაღები გამოცდის პირველადი
              შედეგების აპელაციის შემდეგ შედეგები დარჩა უცვლელი. 2024 წლის მე-9
              კლასში მისაღები გამოცდის შედეგად სკოლაში ჩაირიცხება 5 საუკეთესო
              შედეგის მქონე მოსწავლე, რომლებმაც მისაღებ გამოცდაზე მიიღო 47,4
              ქულა ან მეტი. ...
            </div>
          </div>
        </div>
        <Card href="#" className="max-w-sm shadow-xl animate-avto">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-rexbold">
            რატომ ვეკუა?
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 font-glaho">
            რატომაც არა ძმაო პრობლემა გაქ???? ხო და ეგრე
          </p>
          <a href="" className="text-blue-500 underline">
            {" "}
            მისია
          </a>
          <a href="" className="text-blue-500 underline">
            ბლოგები
          </a>
          <a href="" className="text-blue-500 underline">
            მიღება
          </a>
        </Card>
      </div>
      <div className="container mx-auto flex justify-center animate-avto">
        <div className="w-[768px] p-10 border-opacity-10 border-black border-[0.5px] border-y-[0.5px] border-b-0 border-t-0">
          <h2 className=" font-rexbold text-xl mt-5 mb-5">
            კომაროვის სკოლის მე-9, მე-10 და მე-11 კლასებში მისაღები გამოცდის
            საბოლოო შედეგები{" "}
          </h2>
          <div className="flex justify-between">
            <img
              src="/capture2.png"
              className=" max-w-[60%] max-h-[120px] rounded-md"
            ></img>
            <div className=" flex flex-wrap font-glaho text-sm">
              მე-9, მე-10 და მე-11 კლასებში მისაღები გამოცდის პირველადი
              შედეგების აპელაციის შემდეგ შედეგები დარჩა უცვლელი. 2024 წლის მე-9
              კლასში მისაღები გამოცდის შედეგად სკოლაში ჩაირიცხება 5 საუკეთესო
              შედეგის მქონე მოსწავლე, რომლებმაც მისაღებ გამოცდაზე მიიღო 47,4
              ქულა ან მეტი. ...
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-center animate-avto">
        <div className="w-[768px] p-10 border-opacity-10 border-black border-[0.5px] rounded-md shadow-lg border-t-0 rounded-tr-none rounder-tl-none">
          <h2 className=" font-rexbold text-xl mt-5 mb-5">
            კომაროვის სკოლის მე-9, მე-10 და მე-11 კლასებში მისაღები გამოცდის
            საბოლოო შედეგები{" "}
          </h2>
          <div className="flex justify-between">
            <img
              src="/capture2.png"
              className=" max-w-[60%] max-h-[120px] rounded-md"
            ></img>
            <div className=" flex flex-wrap font-glaho text-sm">
              მე-9, მე-10 და მე-11 კლასებში მისაღები გამოცდის პირველადი
              შედეგების აპელაციის შემდეგ შედეგები დარჩა უცვლელი. 2024 წლის მე-9
              კლასში მისაღები გამოცდის შედეგად სკოლაში ჩაირიცხება 5 საუკეთესო
              შედეგის მქონე მოსწავლე, რომლებმაც მისაღებ გამოცდაზე მიიღო 47,4
              ქულა ან მეტი. ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
