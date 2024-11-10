import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import Image from "next/image"
export default function About(){
    return(
        <div> <h1 className="text-cyan-600 font-bold underline text-4xl text-center mt-3"> ABOUT ME!</h1>
        <section className="text-gray-600 body-font ">
  <div className="container mx-auto flex px-3 py-10 items-center justify-center flex-col">
    <img
      className="w-48 "
      alt="hero"
      src="/Profile Pic.jpg"
      width={150}
      height={150}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-600 hover:text-white mt-4">
      A bit about Me:
      </h1>
      <p className="mb-8 leading-relaxed text-cyan-200">
      I'm a Frontend developer passionate about bringing digital experiences to life through clean, efficient code and pixel-perfect design. Expertise in HTML,CSS, Javascript, Typescript React js & Next js.
      </p>
      <div className="flex justify-center">
        
        <button className="ml-4 inline-flex text-4xl text-blue-400 border-0 py-2 px-6  ">
        <FaLinkedin />
        </button>
        <button className="ml-4 inline-flex text-4xl text-blue-400 border-0 py-2 px-6  ">
        <FaFacebookF />
     </button>
        <button className="ml-4 inline-flex text-4xl text-red-500 border-0 py-2 px-6  ">
        <FaYoutube />

        </button>
      </div>
    </div>
  </div>
  
</section>
</div>
    )
}