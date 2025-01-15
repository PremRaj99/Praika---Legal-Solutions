import React from "react";

const Contactus = () => {
  return (
    <>
      <div className="w-full h-[60vh] bg-cover  bg-center bg-[url('assets\Contactus.jpg')]"></div>
      <div className="w-full h-[100vh] bg-zinc-100">

        
      <div className="hero bg-base-200 min-h-screen">
      
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100  min-w-lg w-[85vw] h-[80vh] bg-zinc-100 shrink-0 shadow-2xl">
    <div className="flex justify-center items-center">
            <h1 className="text-sky-700 text-4xl font-semibold">Contact Us</h1>
            <div></div>
        </div>
      <form className="card-body">
        <div className="form-control flex-row ">
          <label className="label">
            <span className="label-text text-base">First Name</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered w-[30vw]" required />
          <label className="ml-20 label">
            <span className="label-text text-base">Last Name</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered w-[30vw]" required />
        </div>
        <div className="form-control flex-row">
          <label className="label">
            <span className="label-text text-base">Company</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered w-[30vw] ml-2" required />
        
          <label className="ml-20 label">
            <span className="label-text text-base">E-mail</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered w-[30vw] ml-8" required />
          
        </div>
        <div className="form-control flex-row">
          <label className="label">
            <span className="label-text text-base">Job Title</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered w-[71vw] ml-4" required />
          </div>
          <div className="form-control flex-row">
          <label className="label">
            <span className="label-text text-base">Phone Number</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered w-[69vw]" required />
          </div>
          <div className="form-control flex-row">
          <label className="label">
            <span className="label-text text-base">Your Message</span>
          </label>
          <textarea className="textarea textarea-info w-[70vw]" placeholder="Bio" required></textarea>
          </div>
        <div className="form-control mt-6 ml-[550px]">
          <button className="btn btn-primary w-28">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
      </div>
    </>
  );
};

export default Contactus;
