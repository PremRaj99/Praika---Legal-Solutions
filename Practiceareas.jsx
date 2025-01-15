import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

const Practiceareas  = () => {
    return (
        <>
        <div className="bg-[url('assets\our-practice.jpg')] bg-cover bg-center w-full h-[50vh] mt-8 pt-7">
            <div className="w-[900px] h-48 bg-transparent ml-80 flex items-center justify-center rounded-2xl">
                <h2 className="text-white text-7xl font-semibold">Our Practice Areas</h2>

            </div>

        </div>
        <div className="w-full h-[15vh] bg-cyan-900">
            <h3 className="text-white text-4xl pl-24 pt-8">Expertise</h3>

        </div>
        <div className="bg-white w-full h-[200vh]"> 
            <p className="text-sky-950 font-semibold text-3xl pl-48 pr-[350px] pt-7">We are the largest full-service law firm in india,allowing us to deliver 
                truely trustful and favourable advice for our clients.</p>

                <p className="text-cyan-800 pt-6 pl-48 pr-[500px]">At Praika, we are committed to providing exceptional, results-driven 
            legal services across a broad spectrum of practice areas. With a team of seasoned 
            attorneys who bring a wealth of knowledge and experience,
             we pride ourselves on being a trusted partner to individuals, businesses, and organizations alike. </p>

             <h1 className="font-semibold text-4xl text-sky-950 pt-10 underline underline-offset-4  pl-48">Our Practices</h1>

             <div className="z-50 w-[80vw] ml-64 mt-16 bg-blue-950 shadow-2xl rounded-2xl h-[90vh] flex items-center justify-center  gap-16">

                <div className=" text-2xl ">
                    <h2 className="underline underline-offset-8 mb-6 text-zinc-300 grid-rows-1"><IoIosArrowDropright />Aviation</h2>
                    <h2  className="underline underline-offset-8 mb-6 text-zinc-300 gap-2 "><IoIosArrowDropright />Competition/Antitrust</h2>
                    <h2  className="underline underline-offset-8 mb-6 text-zinc-300"><IoIosArrowDropright />Corporate Governance , Compliance & Advisory</h2>
                    <h2  className="underline underline-offset-8 mb-6 text-zinc-300"><IoIosArrowDropright />Intellectual Property Rights</h2>
                    <h2  className="underline underline-offset-8 mb-6 text-zinc-300"><IoIosArrowDropright />Private Equity & Venture Capital</h2>
                    <h2  className="underline underline-offset-8 mb-6 text-zinc-300"><IoIosArrowDropright />Employment Law</h2>
                    <h2  className="underline underline-offset-8 mb-6 text-zinc-300"><IoIosArrowDropright />Taxation</h2>
                    <h2  className="underline underline-offset-8 mb-6 text-zinc-300"><IoIosArrowDropright />White Collar Crime</h2>

                </div>

                <div className="text-2xl">
                    <h2 className="underline underline-offset-8 mb-6 text-zinc-300"><IoIosArrowDropright />Banking & Finance</h2>
                    <h2 className="underline underline-offset-8 mb-6 text-zinc-300"><IoIosArrowDropright />Corporate / M&A</h2>
                    <h2 className="underline underline-offset-8 mb-6 text-zinc-300"><IoIosArrowDropright />Dispute Resolution</h2>
                    <h2 className="underline underline-offset-8 mb-6 text-zinc-300"><IoIosArrowDropright />International Trade Laws & WTO</h2>
                    <h2 className="underline underline-offset-8 mb-6 text-zinc-300"><IoIosArrowDropright />Private Clients, Trusts & Estate Planning</h2>
                    <h2 className="underline underline-offset-8 mb-6 text-zinc-300"><IoIosArrowDropright />Real Estate & Construction</h2>
                    <h2 className="underline underline-offset-8 mb-6 text-zinc-300"><IoIosArrowDropright />TMT</h2>
                </div>

             </div>
        </div>

        
       
        </>
    )
}

export default Practiceareas