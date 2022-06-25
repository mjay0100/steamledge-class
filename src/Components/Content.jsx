import React from "react";

const Content = () => {
  return (
    <section className="flex justify-between">
      <div className='h-[100vh] mt-[4rem]' >
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
            Edcamp helps to gain skills for jobs relevant to the market over
            1000 courses for both teams and individuals
          </p>
        </div>
        <div className="flex flex-start gap-[1rem] mb-6">
          <button className="py-2 px-4 rounded-md bg-blue-500">
            Get started
          </button>
          <button className="py-2 px-4 rounded-md  border border-slate-200">
            Learn more
          </button>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eos
          eveniet beatae, magni corrupti repudiandae aperiam cumque temporibus
          et nam dolorem odit culpa veniam facere possimus dolore vel
          exercitationem blanditiis? Corrupti, nihil est numquam repellendus
          architecto odit porro veritatis illum. Et eius blanditiis consequuntur
          voluptate facilis praesentium, rerum at dolore omnis quis, fugit in
          distinctio itaque dicta doloribus, quo officia velit. Nam blanditiis
          eveniet, perspiciatis sint omnis culpa veritatis nihil nemo obcaecati,
          odio aliquam adipisci iure! Perspiciatis fugit quam recusandae at,
          error voluptates nobis optio suscipit maxime dignissimos sit
          exercitationem? Ipsum, nulla cumque saepe velit vitae excepturi
          laudantium nesciunt veritatis?
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
    </section>
  );
};

export default Content;
