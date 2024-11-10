import Image from "next/image"
export default function Project(){
    return(<section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-cyan-600 lg:w-1/3 lg:mb-0 mb-4">
              Here are my some of the Projects!
            </h1>
            
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:border-yellow-500 hover:border-2 "
                  src="/simple calc.png"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:border-yellow-300 hover:border-2"
                  src="/Currency Converter.png"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block hover:border-yellow-300 hover:border-2"
                  src="/Food Delivery Website.JPG"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block hover:border-yellow-300 hover:border-2"
                  src="static resume builder .jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:border-yellow-300 hover:border-2"
                  src="/car website home page 1.JPG"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:border-yellow-300 hover:border-2"
                  src="/Car website home page 2.JPG"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      )
}