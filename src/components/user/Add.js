import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

function Add() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode:"all"
  });

  const onSubmit = (data) => console.log("datasssssss----->"
  ,data);

  const navigate = useNavigate();
  const data = {
    email: email,
    firstname: firstname,
    lastname: firstname,
  };

  const submitForm=()=> {
    // e.preventDefault();
    axios.post("https://reqres.in/api/users/2", data).then(navigate("/"));
  }
  const notify = () => toast.success(" USER is Added Successfully!");

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">ADD USER</h2>

      <form onSubmit={handleSubmit(submitForm)}
        className="w-[50%] h-full flex flex-col mt-2"
      >
        <input
          type="email"
  name="email"
           onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          placeholder="Enter your email"
           {...register("email", {
             required: true,
             pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
           })}
        />
        <error>
          {errors.email?.type === "required" && "Email is required"}
          {errors.email?.type === "pattern" &&
            "Entered email is in wrong format"}
        </error>
        <input
          // value={firstname}
          type="text"

           onChange={(e) => setFirstName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          placeholder="Enter your Firstname"
          {...register("firstname", { required: true })}
        />
        <error>{errors.firstname?.type === "required" && "Name is required"}</error>

        <input
          // value={lastname}
          type="text"

           onChange={(e) => setLastName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          placeholder="Enter your Lastname"
          {...register("lastname", { required: true })}
        />
        <error>{errors.lastname?.type === "required" && "Name is required"}</error>
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={notify}
           onSubmit={submitForm}
        >
          ADD USER
        </button>
        <Toaster />
      </form>
    </div>
  );
}

export default Add;
