import Image from "next/image"
export default function Hero(){
    return(
<div className="flex gap-24 items-center ">
    <Image src="/Profile Pic.jpg" alt="my-pic" width={200} height={200} className=" ml-[30%] mt-16"/>
    <div>
    <h2 className="text-5xl text-left gap-y-2  font-bold text-cyan-600">Hello <br/> I'm <br /> Haris Altaf</h2>
    <p className="text-cyan-600 mt-9 text-3xl"> Front end Developer </p>
    </div>
</div>
    )
}