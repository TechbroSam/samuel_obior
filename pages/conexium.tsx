import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";

function conexium() {
  return (
    <main className="flex items-center justify-center flex-col w-full px-4 md:px-8">
      <div className="flex flex-col items-center justify-center mt-16">
        <Image
          className="w-full md:w-[90%] px-4 md:px-20"
          loading="lazy"
          src="/img/conexium.png"
          alt="conexium case study"
          width={1000}
          height={0}
        />
        <hr
          className="h-[0.5px] w-[50%] mt-16 bg-gray-200 
              border-0 dark:bg-gray-400"
        ></hr>
        <Image
          className="w-full md:w-[90%] px-4 md:px-20"
          loading="lazy"
          src="/img/overview.png"
          alt="conexium case study"
          width={1000}
          height={0}
        />

        <hr
          className="h-[0.5px] w-[50%] my-4 bg-gray-200 
              border-0 dark:bg-gray-700"
        ></hr>

        <Image
          className="w-full md:w-[90%] px-4 md:px-20"
          loading="lazy"
          src="/img/conexium.png"
          alt="conexium case study"
          width={1000}
          height={0}
        />
      </div>

      <Footer />
    </main>
  );
}

export default conexium;
