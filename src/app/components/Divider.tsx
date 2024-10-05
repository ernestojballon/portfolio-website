import React from "react";
import Image from "next/image";

const Divider: React.FC = () => {
  return (
    <div className="container relative flex h-[250px] items-center border-2 border-black bg-cover bg-center">
      <div className="absolute w-full h-full z-0 ">
        <Image
          src="/images/background-agile-manifesto.jpg"
          alt="Agile Manifesto"
          style={{ objectFit: "cover", zIndex: -1, position: "absolute" }}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-full  text-center items-center justify-center z-10">
        <h2 className="h3 body mt-4">Agile Manifesto</h2>
        <div className=" w-fit mx-auto m-4">
          <p className="flex items-center">
            <strong className="quote">Individuals and interactions</strong>
            <span className="quote ml-2">over processes and tools</span>
          </p>
          <p className="flex items-center">
            <strong className="quote">Working software</strong>
            <span className="quote ml-2">over comprehensive documentation</span>
          </p>
          <p className="flex items-center">
            <strong className="quote">Customer collaboration</strong>
            <span className="quote ml-2">over contract negotiation</span>
          </p>
          <p className="flex items-center">
            <strong className="quote">Responding to change</strong>
            <span className="quote ml-2">over following a plan</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Divider;
