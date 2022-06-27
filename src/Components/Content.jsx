import woman from "../images/woman.png";
import { BsPersonFill } from "react-icons/bs";

const Content = () => {
  return (
    <section className="flex  w-[70%] mx-auto mb-[4rem]  relative">
      <div className="mt-[4rem] ">
        <div>
          <p className="mb-2">World class education</p>
          <h1 className="text-5xl font-bold mb-4">
            Become
            <br />
            a professional in
            <br />
            either field
          </h1>
          <p className="mb-4">
            Edcamp helps to gain skills for jobs relevant to the market <br />{" "}
            over 1000 courses for both teams and individuals
          </p>
        </div>
        <div className="flex flex-start gap-[1rem] mb-6">
          <button className="py-2 px-4 text-white rounded-md bg-gray-900">
            Get started
          </button>
          <button className="py-2 px-4 rounded-md  border border-slate-200">
            Learn more
          </button>
        </div>

       
      </div>
      <div className="h-[294px] w-[200px] bg-lime-400 rounded-t-3xl rounded-b-2xl absolute left-[60%] right-0 top-[200px] rotate-12 "></div>
      <div className="h-[400px] w-[200px] bg-gray-900 rounded-t-3xl rounded-b-2xl absolute left-[80%] right-0 top-[100px] rotate-12 "></div>

      <img className="z-10 w-1/2" src={woman} alt="" />
    </section>
  );
};

export default Content;
