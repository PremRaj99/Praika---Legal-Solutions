import React from "react";
import logoimage from "../assets/logoimage.jpg"

const Loginpage = () => {
    return(
        <>
        <div className="bg-blue-950 w-full h-screen flex justify-center items-center"> 

            <div className="w-[500px] h-[500px] bg-white rounded-xl  z-20 drop-shadow-lg ">
                <img src = {logoimage} className="w-28 ml-48 mt-5"></img>
               
                <h1 className="text-3xl text-blue-900 font-semibold ml-44 mt-6">User Login</h1>
                <div className="mt-8 ">
                <label for = "username" className="ml-14 mt-20 text-black">Username:</label>
                <input type = "text" name = "username" className="bg-transparent border-b-2 w-72 border-blue-950 "></input>
                   <br></br>
                   <div className="mt-11">
                <label for = "password" className="ml-16 text-black">Password:</label>
                <input type = "password" name = "password" className="bg-transparent border-b-2 w-72 border-blue-950 "></input>
                </div>


                <button className="border border-blue-950 p-3 mt-12 rounded-full w-28 hover:bg-cyan-800 ml-48 transition duration-300 bg-sky-900 text-zinc-50">Login</button>


                
                <p className="ml-36 mt-16 text-lg text-black"><span><a href = "#" className="hover:text-zinc-700">Forgot Username</a></span>/<span><a href = "#" className="hover:text-zinc-700">Password</a></span></p>

                </div>

            </div>
        </div>
        </>
    )
} 

export default Loginpage;