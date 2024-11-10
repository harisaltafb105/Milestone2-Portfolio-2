import Link from "next/link"
export default function Navbar(){
    return(
        <header className="text-pink-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 text-white flex-col md:flex-row items-center">
    <Link href="" className="flex title-font font-medium items-center text-pink-300 mb-4 md:mb-0">
      <h2 className="text 3xl font-bold text-yellow-500 hover:text-cyan-600"> HA.</h2>
      
    </Link >
    <nav className="md:ml-auto md:mr-80 flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-6 text-white hover:text-pink-300">Home</Link >
      <Link href="/about" className="mr-5 text-white hover:text-pink-300">About</Link>
      <Link href="/projects" className="mr-5 text-white hover:text-pink-300">Projects</Link >
      <Link href="/contact" className="mr-5 text-white hover:text-pink-300">About</Link >
    </nav>
    <button className="inline-flex items-center bg-pinktext-pink-100 border-0 py-1 px-3 focus:outline-none hover:bg-pink-300 rounded text-base mt-4 md:mt-0">
      Portfolio
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>

    )
}