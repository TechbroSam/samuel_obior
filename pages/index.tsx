import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="items-start px-4 md:px-20 lg:px-60">
        <div className="mt-8">
          <div className="font-bold text-lg md:text-xl md:tracking-wide text-left md:leading-normal">
            <span className=" ">
              Hello! I’m a UX/UI designer strongly focused <br className="hidden md:block" />
            </span>
            on creating{" "} 
            <span className="bg-[#0E2954] text-[#F0F2F5] px-2 py-1 rounded-md">
              beautiful, functional UI.
            </span>
          </div>
        </div>
        <div className="mt-10 text-xl md:text-2xl font-extrabold mb-3 text-left">My work</div>
        <div className="flex flex-col md:flex-row md:justify-between space-y-10 md:space-y-0 md:gap-10">
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-[#EAC7CC] rounded-lg shadow-xl">
              <Image
                className="shadow-lg p-4"
                loading="lazy"
                src="/img/sample_bg.svg"
                alt="Sample project"
                width={700}
                height={0}
              />
            </div>
            <div className="flex flex-col gap-1 md:mt-3 mt-2 text-center md:text-left">
              <div className="text-lg md:text-xl font-bold text-left">Ainec</div>
              
                <p className="flex items-start text-left">
                A web based SaaS product for managing restaurant deliveries <br className="hidden md:flex" /> and orders.
                </p>
              
              <div className="font-bold underline text-left cursor-pointer ">Read Case Study</div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="bg-[#43398E] rounded-lg shadow-xl w-fit">
              <Image
                className="shadow-lg p-4"
                src="/img/sample_bg.svg"
                loading="lazy"
                alt="Sample project"
                width={700}
                height={0}
              />
            </div>
            <div className="flex flex-col gap-1 md:mt-3 mt-2 text-center md:text-left">
              <div className="text-lg md:text-xl font-bold text-left">Ajala</div>
              
                <p className="flex items-start text-left">
                A web based SaaS product for managing restaurant deliveries <br className="hidden md:flex" /> and orders.
                </p>
              
              <div className="font-bold underline text-left cursor-pointer ">Read Case Study</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between space-y-10 md:space-y-0 md:gap-10 mt-10 md:mt-20">
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-[#EAC7CC] rounded-lg shadow-xl w-fit">
              <Image
                className="shadow-lg p-4"
                src="/img/sample_bg.svg"
                alt="Sample project"
                loading="lazy"
                width={700}
                height={0}
              />
            </div>
            <div className="flex flex-col gap-1 md:mt-3 mt-2 text-center md:text-left">
              <div className="text-lg md:text-xl font-bold text-left">Telbo</div>
              
                <p className="flex items-start text-left">
                A web based SaaS product for managing restaurant deliveries <br className="hidden md:flex" /> and orders.
                </p>
              
              <div className="font-bold underline text-left cursor-pointer ">Read Case Study</div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="bg-[#43398E] rounded-lg shadow-xl w-fit">
              <Image
                className="shadow-lg p-4"
                src="/img/sample_bg.svg"
                alt="Sample project"
                loading="lazy"
                width={700}
                height={0}
              />
            </div>
            <div className="flex flex-col gap-1 md:mt-3 mt-2 text-center md:text-left">
              <div className="text-lg md:text-xl font-bold text-left">Avoclub</div>
              
                <p className="flex items-start text-left">
                A web based SaaS product for managing restaurant deliveries <br className="hidden md:flex" /> and orders.
                </p>
              
              <div className="font-bold underline text-left cursor-pointer ">Read Case Study</div>
            </div>
          </div>
        </div>

        {showMore && (
          <div className="flex flex-col md:flex-row md:justify-between space-y-10 md:space-y-0 md:gap-10 mt-10 md:mt-20">
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-[#EAC7CC] rounded-lg shadow-xl w-fit">
                <Image
                  className="shadow-lg p-4"
                  src="/img/sample_bg.svg"
                  alt="Sample project"
                  loading="lazy"
                  width={700}
                  height={0}
                />
              </div>
            <div className="flex flex-col gap-1 md:mt-3 mt-2 text-center md:text-left">
              <div className="text-lg md:text-xl font-bold text-left">Aromatic</div>
              
                <p className="flex items-start text-left">
                A web based SaaS product for managing restaurant deliveries <br className="hidden md:flex" /> and orders.
                </p>
              
              <div className="font-bold underline text-left cursor-pointer ">Read Case Study</div>
            </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="bg-[#43398E] rounded-lg shadow-xl w-fit">
                <Image
                  className="shadow-lg p-4"
                  src="/img/sample_bg.svg"
                  alt="Sample project"
                  loading="lazy"
                  width={700}
                  height={0}
                />
              </div>
            <div className="flex flex-col gap-1 md:mt-3 mt-2 text-center md:text-left">
              <div className="text-lg md:text-xl font-bold text-left">Dunamis</div>
              
                <p className="flex items-start text-left">
                A web based SaaS product for managing restaurant deliveries <br className="hidden md:flex" /> and orders.
                </p>
              
              <div className="font-bold underline text-left cursor-pointer ">Read Case Study</div>
            </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-center mt-5 md:mt-10">
          <button
            onClick={handleShowMore}
            className="bg-[#0E2954] text-[#F0F2F5] px-4 py-2 rounded-md shadow-md md:hover:bg-[#0b1f3c]"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>

        <div id="contact" className="mt-20 md:mt-40 flex flex-col items-start">
          <div className="font-bold text-3xl mb-3">Get in touch</div>
          <div className="bg-[#0E2954] text-[#F0F2F5] w-fit py-3 px-10 font-medium text-lg rounded-md">
            samuelobior@gmail.com
          </div>
          <div className="flex items-center mt-5 w-fit space-x-3 cursor-pointer">
            <Image src="/img/linkedin.png" alt="LinkedIn" width={28} height={28} />
            <div className="font-medium text-lg underline">linkedin.com/in/samuelobior</div>
          </div>
          <div className="flex items-center mt-5 w-fit space-x-3 cursor-pointer">
            <Image src="/img/pdf.svg" alt="Resume" width={28} height={28} />
            <div className="font-medium text-lg underline">Resume-Samuel-Obior.pdf</div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
