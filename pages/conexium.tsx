import React from "react";
import Footer from "@/components/Footer1";
import Image from "next/image";

function conexium() {
  return (
<main className="flex items-center justify-center flex-col w-full bg-[#121212] px-4 md:px-8">
  
    <Image
      className="w-full md:w-[90%] h-auto px-4 md:px-20"
      loading="lazy"
      src="/img/conexium.jpg"
      alt="conexium case study"
      width={1000}
      height={0}
    />

  <Footer/>
</main>
  );
}

export default conexium;
