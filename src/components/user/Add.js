import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


function Add() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const data = {
    email: email,
    first_name:first_name,
    last_name:last_name,
  
  };
console.log("data------------->",data);
  function submitForm(e) {
    e.preventDefault();
    axios.post("https://reqres.in/api/users?page=2", data).then(navigate("/"));
  }
  const notify = () => toast.success('Successfully Deleted!');

  
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">ADD USER</h2>
     

      <form className="w-[50%] h-full flex flex-col mt-2">
     
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="email"
          placeholder="Enter your email"
        />
       <input
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your Firstname"
        />
           <input
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your Lastname"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={()=>{submitForm(); notify();}}
        >
          ADD USER
        </button>
        <Toaster />

      </form>
    </div>
  );
}

export default Add;