import { useState } from 'react';
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
      <div className="items-start px-60">
        <div className="mt-10">
          <div className="font-bold text-xl tracking-wider">
            <span className="leading-loose">
              Hello! I’m a UX/UI designer strongly focused <br />
            </span>
            on creating{" "}
            <span className="bg-[#0E2954] text-[#F0F2F5] px-2 py-1 rounded-md">
              beautiful, functional UI.
            </span>
          </div>
        </div>
        <div className="mt-12 text-2xl font-bold mb-5">My work</div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="bg-[#EAC7CC] rounded-lg shadow-xl w-fit">
              <Image
                className="p-5 shadow-lg h-[22.5rem]"
                src="/img/sample_bg.svg"
                alt="Sample project"
                width="500"
                height="0"
              />
            </div>
            <div className="space-y-1 mt-3">
              <div className="text-xl font-bold">Avoclub</div>
              <div className="">
                A web based SaaS product for managing restaurant deliveries
                <br />
                and orders.
              </div>
              <div className="font-bold underline">Read Case Study</div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-[#43398E] rounded-lg shadow-xl">
              <Image
                className="p-5 shadow-lg h-[22.5rem]"
                src="/img/sample_bg.svg"
                alt="Sample project"
                width="500"
                height="0"
              />
            </div>
            <div className="space-y-1 mt-3">
              <div className="text-xl font-bold">Avoclub</div>
              <div className="">
                A web based SaaS product for managing restaurant deliveries
                <br />
                and orders.
              </div>
              <div className="font-bold underline">Read Case Study</div>
            </div>
          </div>
        </div>

            <div className="flex mt-20 justify-between">
              <div className="flex flex-col">
                <div className="bg-[#43398E] rounded-lg shadow-xl">
                  <Image
                    className="p-5 shadow-lg h-[22.5rem]"
                    src="/img/sample_bg.svg"
                    alt="Sample project"
                    width="500"
                    height="0"
                  />
                </div>
                <div className="space-y-1 mt-3">
                  <div className="text-xl font-bold">Avoclub</div>
                  <div className="">
                    A web based SaaS product for managing restaurant deliveries
                    <br />
                    and orders.
                  </div>
                  <div className="font-bold underline">Read Case Study</div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="bg-[#EAC7CC] rounded-lg shadow-xl">
                  <Image
                    className="p-5 shadow-lg h-[22.5rem]"
                    src="/img/sample_bg.svg"
                    alt="Sample project"
                    width="500"
                    height="0"
                  />
                </div>
                <div className="space-y-1 mt-3">
                  <div className="text-xl font-bold">Avoclub</div>
                  <div className="">
                    A web based SaaS product for managing restaurant deliveries
                    <br />
                    and orders.
                  </div>
                  <div className="font-bold underline">Read Case Study</div>
                </div>
              </div>
            </div>
          {showMore && (
          <>
            <div className="flex mt-20 justify-between">
              <div className="flex flex-col">
                <div className="bg-[#EAC7CC] rounded-lg shadow-xl">
                  <Image
                    className="p-5 shadow-lg h-[22.5rem]"
                    src="/img/sample_bg.svg"
                    alt="Sample project"
                    width="500"
                    height="0"
                  />
                </div>
                <div className="space-y-1 mt-3">
                  <div className="text-xl font-bold">Avoclub</div>
                  <div className="">
                    A web based SaaS product for managing restaurant deliveries
                    <br />
                    and orders.
                  </div>
                  <div className="font-bold underline">Read Case Study</div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="bg-[#43398E] rounded-lg shadow-xl">
                  <Image
                    className="p-5 shadow-lg h-[22.5rem]"
                    src="/img/sample_bg.svg"
                    alt="Sample project"
                    width="500"
                    height="0"
                  />
                </div>
                <div className="space-y-1 mt-3">
                  <div className="text-xl font-bold">Avoclub</div>
                  <div className="">
                    A web based SaaS product for managing restaurant deliveries
                    <br />
                    and orders.
                  </div>
                  <div className="font-bold underline">Read Case Study</div>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="items-center justify-center text-center my-20 flex">
          <div
            className="bg-[#0E2954] rounded-3xl shadow-lg text-[#F0F2F5] font-medium text-xl text-center w-fit px-8 py-2 cursor-pointer"
            onClick={handleShowMore}
          >
            {showMore ? "Show less" : "Show more"}
          </div>
        </div>
        <div id="contact" className="mt-40 items-start flex flex-col">
          <div className="font-bold text-3xl mb-3">Get in touch</div>
          <div className="bg-[#0E2954] text-[#F0F2F5] w-fit py-3 px-10 font-medium text-lg">
            samuelobior@gmail.com
          </div>
          <div className="flex items-center mt-5 w-fit space-x-3">
            <div className="flex w-fit">
              <Image
                className=""
                src="/img/linkedin.png"
                alt="LinkedIn"
                width="28"
                height="0"
              />
            </div>
            <div className="font-medium text-lg underline">
              linkedin.com/in/samuelobior
            </div>
          </div>
          <div className="flex items-center mt-5 mb-10 w-fit space-x-3">
            <div className="flex w-fit">
              <Image
                className=""
                src="/img/pdf.svg"
                alt="Resume"
                width="28"
                height="0"
              />
            </div>

            <div className="font-medium text-lg underline">
              Resume-Samuel-Obior.pdf
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
