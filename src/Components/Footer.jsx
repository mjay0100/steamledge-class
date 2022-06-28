import { FaTrophy } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";

const Footer = () => {
  return (
    <section className="block  text-center md:flex justify-between w-4/6 text-[#ccc] font-semibold mx-auto mt-[1.5rem] mb-[1rem] text-lg">
      <h1 className=" justify-center mb-2 md:justify-start items-center flex gap-2">
        {" "}
        <span>
          <FaTrophy />
        </span>{" "}
        unacademy
      </h1>
      <h1 className="mb-2">coursera</h1>
      <h1 className="mb-2">
        SKILL <br />
        SHare.
      </h1>
      <h1 className=" justify-center md:justify-start items-center flex gap-2">
        <span>
          {" "}
          <SiUdemy />
        </span>
        Udemy
      </h1>
    </section>
  );
};

export default Footer;
