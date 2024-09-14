import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex flex-col">
      <Navbar />

      <div className="items-start px-4 md:px-20 lg:px-60">
        <div className="mt-8">
          <div className="font-bold text-lg md:text-xl md:tracking-wide text-left md:leading-normal">
            <span className=" ">
              Hello! I’m a UX/UI designer devoted{" "}
              <br className="hidden md:block" />
            </span>
            to designing{" "}
            <span className="bg-[#1967D2] text-[#F0F2F5] px-2 py-1 rounded-md">
              stunning and practical UI.
            </span>
          </div>
        </div>
        <div className="mt-10 text-xl md:text-2xl font-extrabold mb-3 text-left">
          My work
        </div>
        <div className="flex flex-col md:flex-row md:justify-between space-y-10 md:space-y-0 md:gap-10">
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-[#2e2e2e] rounded-lg shadow-lg w-fit">
              <Image
                className="shadow-lg p-4"
                loading="lazy"
                src="/img/in_progress.svg"
                alt="Sample project"
                width={700}
                height={0}
              />
            </div>
            <div className="flex flex-col gap-1 md:mt-2 mt-1">
              <div className="text-lg md:text-xl font-bold text-left">
                AINEC
              </div>

              <p className="flex items-start text-left">
                A blockchain election website for Nigerians to vote from the comfort of their homes.
              </p>

              <div

                className="font-bold underline text-left"
              >
                Read Case Study
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="bg-[#2e2e2e] rounded-lg shadow-lg w-fit">
              <Image
                className="shadow-lg p-4"
                src="/img/in_progress.svg"
                loading="lazy"
                alt="Sample project"
                width={700}
                height={0}
              />
            </div>
            <div className="flex flex-col gap-1 md:mt-2 mt-1">
              <div className="text-lg md:text-xl font-bold text-left">
                Ajala
              </div>

              <p className="flex items-start text-left">
                A currency exchange mobile app designed for global citizens that are always on the move.
              </p>

              <div className="font-bold underline text-left">
                Read Case Study
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between space-y-10 md:space-y-0 md:gap-10 mt-10 md:mt-20">
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-[#2e2e2e] rounded-lg shadow-lg w-fit">
              <Image
                className="shadow-lg p-4"
                src="/img/conexium_frame.svg"
                alt="Sample project"
                loading="lazy"
                width={700}
                height={0}
              />
            </div>
            <div className="flex flex-col gap-1 md:mt-2 mt-1">
              <div className="text-lg md:text-xl font-bold text-left">
                Conexium
              </div>

              <p className="flex items-start text-left">
                A watch app to control any smart home device irrespective of the brand.
              </p>

              <Link  href="conexium"
            target="/blank" className="font-bold underline text-left">
                Read Case Study
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="bg-[#2e2e2e] rounded-lg shadow-lg w-fit">
              <Image
                className="shadow-lg p-4"
                src="/img/in_progress.svg"
                alt="Sample project"
                loading="lazy"
                width={700}
                height={0}
              />
            </div>
            <div className="flex flex-col gap-1 md:mt-2 mt-1">
              <div className="text-lg md:text-xl font-bold text-left">
                YAIT
              </div>

              <p className="flex items-start text-left">
                A website for an organization that onboards young Africans in the UK who are interested in tech.
              </p>

              <div className="font-bold underline text-left">
                Read Case Study
              </div>
            </div>
          </div>
        </div>
        <div id="contact" className="mt-20 md:mt-40 flex flex-col items-start">
          <div className="font-bold text-3xl mb-3">Get in touch</div>
          <div className="bg-[#1967D2] text-[#F0F2F5] w-fit py-3 px-10 font-medium text-lg rounded-md">
            samuelobior@gmail.com
          </div>
          <Link 
           href={"https://www.linkedin.com/in/samuelobior"}
            target="/blank"
          className="flex items-center mt-5 w-fit space-x-3 cursor-pointer">
            <Image
              src="/img/linkedin.png"
              alt="LinkedIn"
              width={28}
              height={28}
            />
            <div
            className="font-medium text-lg underline">
              linkedin.com/in/samuelobior
            </div>
          </Link>
          <Link
          href={"/resume-Samuel-Obior.pdf"}
          target="_blank"
          className="flex items-center mt-5 w-fit space-x-3 cursor-pointer">
            <Image src="/img/pdf.svg" alt="Resume" width={28} height={28} />
            <div className="font-medium text-lg underline">
              Resume-Samuel-Obior.pdf
            </div>
          </Link>
                    <Link
          href={"https://github.com/TechbroSam"}
          target="_blank"
          className="flex items-center mt-5 w-fit space-x-3 cursor-pointer">
            <Image src="/img/github-mark.svg" alt="Resume" width={32} height={32} />
            <div className="font-medium text-lg underline">
              github.com/TechbroSam
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
