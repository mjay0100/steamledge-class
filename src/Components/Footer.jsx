import { FaTrophy } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";

const Footer = () => {
  return (
    <section className="flex justify-between w-1/2 text-[#ccc] font-semibold mx-auto mt-[1.5rem] mb-[1rem] text-lg">
      <div className="flex items-center gap-2">
        <FaTrophy />
        <h1 className="font-normal">unacademy</h1>
      </div>
      <h1>coursera</h1>
      <h1 className="">
        SKILL <br />
        SHare.
      </h1>
      <div className="flex items-center gap-2">
        <SiUdemy />
        <h1>Udemy</h1>
      </div>
    </section>
  );
};

export default Footer;
